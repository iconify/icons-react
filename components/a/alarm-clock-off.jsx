import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tjmki8x4n.css';
import '../../css/t/t1khfhdyn.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tjmki8x4n"/><path class="t1khfhdyn wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-off",
	});
}

export default Component;
