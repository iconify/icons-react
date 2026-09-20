import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/z/zper8ccee.css';
import '../../css/v/vt5vzf2ig.css';
import '../../css/j/j_eundbvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="zper8ccee"/><path class="vt5vzf2ig"/><path class="j_eundbvx"/></g>`,
		"fallback": "streamline-plump:chess-pawn",
	});
}

export default Component;
