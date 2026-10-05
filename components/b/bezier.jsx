import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kkjojr6tv.css';
import '../../css/w/wea6_tbyn.css';
import '../../css/f/f8gwan4-o.css';
import '../../css/m/m17cbmwng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kkjojr6tv"/><path class="wea6_tbyn"/><path class="f8gwan4-o"/><path class="m17cbmwng"/></g>`,
		"fallback": "matita:bezier",
	});
}

export default Component;
