import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvvss987d.css';
import '../../css/p/p5oy8duvh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvvss987d"/><path class="p5oy8duvh"/>`,
		"fallback": "carbon:data-bin",
	});
}

export default Component;
