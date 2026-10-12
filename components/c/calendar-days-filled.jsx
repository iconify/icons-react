import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-m4kzb8y.css';
import '../../css/g/gjba8cbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d-m4kzb8y"/><path class="gjba8cbzj"/>`,
		"fallback": "lucide-extended:calendar-days-filled",
	});
}

export default Component;
