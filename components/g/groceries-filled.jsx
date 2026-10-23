import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyz221lmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyz221lmc"/>`,
		"fallback": "lucide-extended:groceries-filled",
	});
}

export default Component;
