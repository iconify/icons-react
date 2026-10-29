import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/o/oz0bnwbnj.css';
import '../../css/u/uriu8nb7a.css';
import '../../css/h/h0135acfe.css';
import '../../css/q/q9fsdgx4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="oz0bnwbnj"/><path class="uriu8nb7a"/><path class="h0135acfe wm-shine"/><path class="q9fsdgx4f wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-pdf",
	});
}

export default Component;
