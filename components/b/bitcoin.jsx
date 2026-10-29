import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftxn_jwhd.css';
import '../../css/l/l2xh8y9ot.css';
import '../../css/u/u5kqq2boz.css';
import '../../css/x/xtcf5ibls.css';
import '../../css/n/n-y07fboo.css';
import '../../css/i/i-7pvnbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftxn_jwhd wm-k"/><path class="l2xh8y9ot wm-k"/><path class="u5kqq2boz wm-k"/><path class="wm-a xtcf5ibls"/><path class="n-y07fboo wm-a"/><path class="i-7pvnbwy wm-a"/></g>`,
		"fallback": "withicons-anime:bitcoin",
	});
}

export default Component;
