import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o4-575bqq.css';
import '../../css/q/quk2qgbrt.css';
import '../../css/y/ysqxkebtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o4-575bqq"/><path class="quk2qgbrt"/><path class="ysqxkebtz"/></g>`,
		"fallback": "keyline-icons:flask-conical-off-sharp-duotone",
	});
}

export default Component;
