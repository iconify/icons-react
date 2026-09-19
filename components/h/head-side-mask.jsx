import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8he06wsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8he06wsv"/>`,
		"fallback": "fa-solid:head-side-mask",
	});
}

export default Component;
