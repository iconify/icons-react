import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udjwmmbyu.css';
import '../../css/i/ily3ncazb.css';
import '../../css/m/mjwibbccu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udjwmmbyu"/><path class="ily3ncazb"/><path class="mjwibbccu"/>`,
		"fallback": "lucide-extended:file-stack-filled",
	});
}

export default Component;
