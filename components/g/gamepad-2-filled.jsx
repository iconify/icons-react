import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tira8ib7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tira8ib7m"/>`,
		"fallback": "lucide-extended:gamepad-2-filled",
	});
}

export default Component;
