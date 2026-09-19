import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxiruyb8b.css';
import '../../css/j/juj6h7bxp.css';
import '../../css/n/n9kk-kgek.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxiruyb8b"/><path class="juj6h7bxp"/><path class="n9kk-kgek"/>`,
		"fallback": "ep:box",
	});
}

export default Component;
