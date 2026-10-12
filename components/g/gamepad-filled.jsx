import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tftm5ub6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tftm5ub6c"/>`,
		"fallback": "lucide-extended:gamepad-filled",
	});
}

export default Component;
