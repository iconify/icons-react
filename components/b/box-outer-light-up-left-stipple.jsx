import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0ybjnd-p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0ybjnd-p"/>`,
		"fallback": "memory:box-outer-light-up-left-stipple",
	});
}

export default Component;
