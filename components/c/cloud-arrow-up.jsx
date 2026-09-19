import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcuf-ab3a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcuf-ab3a"/>`,
		"fallback": "fa6-solid:cloud-arrow-up",
	});
}

export default Component;
