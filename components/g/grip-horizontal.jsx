import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d-6h1xbtt.css';
import '../../css/l/l93nsoncv.css';
import '../../css/q/qhhxxvbud.css';
import '../../css/h/h6ajusb6w.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="d-6h1xbtt wm-shadow"/><path class="l93nsoncv"/><path class="qhhxxvbud"/><path class="h6ajusb6w"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:grip-horizontal",
	});
}

export default Component;
