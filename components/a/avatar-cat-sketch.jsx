import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e57mt9qpn.css';
import '../../css/f/fzq5egeqa.css';
import '../../css/b/bi9r08orm.css';
import '../../css/w/wopk95bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e57mt9qpn"/><path class="fzq5egeqa wm-a"/><path class="bi9r08orm wm-k"/><path class="wm-a wopk95bgx"/></g>`,
		"fallback": "withicons:avatar-cat-sketch",
	});
}

export default Component;
