import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr-6t8b6g.css';
import '../../css/q/qfc_s602x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zr-6t8b6g"/><path class="qfc_s602x"/>`,
		"fallback": "solar:battery-low-minimalistic-bold",
	});
}

export default Component;
