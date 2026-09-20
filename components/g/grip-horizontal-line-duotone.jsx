import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zo874nbdq.css';
import '../../css/m/mfdgc7b0x.css';
import '../../css/l/lekigjbvy.css';
import '../../css/h/hzbwlrnku.css';
import '../../css/z/zjx9kz-ib.css';
import '../../css/f/f3sty6bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(-180 5 15.512)" class="zo874nbdq"/><circle transform="rotate(-180 12 15.512)" class="mfdgc7b0x"/><circle transform="rotate(-180 19 15.496)" class="lekigjbvy"/><circle transform="rotate(-180 5 8.504)" class="hzbwlrnku"/><circle transform="rotate(-180 12 8.504)" class="zjx9kz-ib"/><circle transform="rotate(-180 19 8.488)" class="f3sty6bdo"/></g>`,
		"fallback": "solar:grip-horizontal-line-duotone",
	});
}

export default Component;
