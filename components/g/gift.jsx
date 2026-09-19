import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dfg4jry2k.css';
import '../../css/l/lltwtebwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="dfg4jry2k"/><path class="lltwtebwj"/></g>`,
		"fallback": "codex:gift",
	});
}

export default Component;
