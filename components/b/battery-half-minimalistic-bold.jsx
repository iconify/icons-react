import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge4dfdclf.css';
import '../../css/q/qfc_s602x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ge4dfdclf"/><path class="qfc_s602x"/>`,
		"fallback": "solar:battery-half-minimalistic-bold",
	});
}

export default Component;
