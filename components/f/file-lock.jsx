import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/o/oz0bnwbnj.css';
import '../../css/j/jt6ggfbbt.css';
import '../../css/z/zi--h_lqt.css';
import '../../css/q/q9fsdgx4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="oz0bnwbnj"/><path class="jt6ggfbbt"/><path class="wm-shine zi--h_lqt"/><path class="q9fsdgx4f wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-lock",
	});
}

export default Component;
