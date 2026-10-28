import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/tk26rl12m.css';
import '../../css/t/t0axslt3v.css';
import '../../css/o/o1r9vkb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="tk26rl12m"/><path class="t0axslt3v"/><path class="o1r9vkb7d"/></g>`,
		"fallback": "codex:copy-check",
	});
}

export default Component;
