import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re9d79bbj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re9d79bbj"/>`,
		"fallback": "fa-solid:crow",
	});
}

export default Component;
