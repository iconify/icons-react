import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7qa5lbsc.css';
import '../../css/u/uz-tkbbqf.css';
import '../../css/l/lruh5mb8n.css';
import '../../css/o/oa3hoyr8p.css';
import '../../css/r/rbls-1btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7qa5lbsc"/><path clip-rule="evenodd" class="uz-tkbbqf"/><path class="lruh5mb8n"/><path class="oa3hoyr8p"/><path class="rbls-1btg"/>`,
		"fallback": "token:cap",
	});
}

export default Component;
