import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi6y65ble.css';
import '../../css/j/j2lg5bcnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi6y65ble"/><path class="j2lg5bcnh"/>`,
		"fallback": "lucide-extended:funnel-x-filled",
	});
}

export default Component;
