import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mqpou98jf.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/s/shi8u7lan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mqpou98jf"/><path class="qr4ochb5c wm-s"/><path class="shi8u7lan"/></g>`,
		"fallback": "withicons:cloud-off-duo",
	});
}

export default Component;
