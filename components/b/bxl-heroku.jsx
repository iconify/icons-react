import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a44ve8u8n.css';
import '../../css/s/sxn19pbzw.css';
import '../../css/r/rfsxccbks.css';
import '../../css/o/oqup6jbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a44ve8u8n"/><path class="sxn19pbzw"/><path class="rfsxccbks"/><path class="oqup6jbzm"/>`,
		"fallback": "bx:bxl-heroku",
	});
}

export default Component;
