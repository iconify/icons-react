import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y81lxi9mq.css';
import '../../css/h/hnn33mbck.css';
import '../../css/f/fbh52zsss.css';
import '../../css/a/azd7eibrn.css';
import '../../css/d/dziomlb8a.css';
import '../../css/z/zxx7xobct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y81lxi9mq"/><path class="hnn33mbck"/><circle transform="rotate(45 9.69 14.49)" class="fbh52zsss"/><path class="azd7eibrn"/><rect transform="rotate(45 6.82 28.9)scale(-1 1)" class="dziomlb8a"/><rect transform="rotate(45 7.02 29.26)scale(-1 1)" class="zxx7xobct"/></g>`,
		"fallback": "andrsrxn:guitar",
	});
}

export default Component;
