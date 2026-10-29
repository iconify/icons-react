import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fo4x2o_9l.css';
import '../../css/t/tpe0mhbvy.css';
import '../../css/g/gyu5sx5mi.css';
import '../../css/h/hep4d8tqz.css';
import '../../css/l/loaz1bb4v.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fo4x2o_9l wm-shadow"/><path class="tpe0mhbvy"/><path class="gyu5sx5mi"/><path class="hep4d8tqz"/><path class="loaz1bb4v wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:corner-down-right",
	});
}

export default Component;
