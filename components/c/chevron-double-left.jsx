import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c55g4gb7e.css';
import '../../css/j/jkx5qo6th.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c55g4gb7e"/><path class="jkx5qo6th"/>`,
		"fallback": "cil:chevron-double-left",
	});
}

export default Component;
