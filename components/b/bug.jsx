import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/j0qrprddi.css';
import '../../css/w/wo-jssbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="j0qrprddi"/><path class="wo-jssbrk"/></g>`,
		"fallback": "codex:bug",
	});
}

export default Component;
