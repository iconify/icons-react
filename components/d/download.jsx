import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb2hu2lmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb2hu2lmi"/>`,
		"fallback": "zondicons:download",
	});
}

export default Component;
