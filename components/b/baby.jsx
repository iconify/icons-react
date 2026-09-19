import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttzc0fbho.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttzc0fbho"/>`,
		"fallback": "fa6-solid:baby",
	});
}

export default Component;
