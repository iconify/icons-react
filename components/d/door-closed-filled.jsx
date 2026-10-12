import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g57tje5ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g57tje5ml"/>`,
		"fallback": "lucide-extended:door-closed-filled",
	});
}

export default Component;
