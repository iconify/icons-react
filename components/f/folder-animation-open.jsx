import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/khwz4mspj.css';
import '../../css/r/r7dlor7xk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="khwz4mspj"/><path class="r7dlor7xk"/></g>`,
		"fallback": "catppuccin:folder-animation-open",
	});
}

export default Component;
