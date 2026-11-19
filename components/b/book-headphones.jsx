import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzm7bcc6g.css';
import '../../css/z/zayp6_xeg.css';
import '../../css/a/auq-e_b7y.css';
import '../../css/m/mg05szbmz.css';
import '../../css/s/smbqxce9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lzm7bcc6g"/><path class="zayp6_xeg"/><path class="auq-e_b7y"/><path class="mg05szbmz"/><path class="smbqxce9x"/></g>`,
		"fallback": "andrsrxn:book-headphones",
	});
}

export default Component;
