import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjqhxbbwg.css';
import '../../css/g/g6xizdbtb.css';
import '../../css/o/o15x4kbqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjqhxbbwg"/><path class="g6xizdbtb"/><path class="o15x4kbqi"/>`,
		"fallback": "cil:assistive-listening-system",
	});
}

export default Component;
