import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9ou3fpyy.css';
import '../../css/c/cq_4pmbzu.css';
import '../../css/u/umr51jx_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9ou3fpyy"/><path class="cq_4pmbzu"/><path clip-rule="evenodd" class="umr51jx_i"/>`,
		"fallback": "token:anc",
	});
}

export default Component;
