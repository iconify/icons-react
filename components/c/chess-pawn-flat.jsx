import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cb_788bwf.css';
import '../../css/u/u4v9fthsj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cb_788bwf"/><path class="u4v9fthsj"/></g>`,
		"fallback": "streamline-plump-color:chess-pawn-flat",
	});
}

export default Component;
