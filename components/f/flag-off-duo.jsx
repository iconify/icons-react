import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vgi0-qbpw.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/l/lcou3abui.css';
import '../../css/o/op1x1ovuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vgi0-qbpw"/><path class="qr4ochb5c wm-s"/><path class="lcou3abui"/><path class="op1x1ovuv wm-a"/></g>`,
		"fallback": "withicons:flag-off-duo",
	});
}

export default Component;
