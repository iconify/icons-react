import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lcou3abui.css';
import '../../css/o/op1x1ovuv.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lcou3abui"/><path class="op1x1ovuv wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:flag-off",
	});
}

export default Component;
