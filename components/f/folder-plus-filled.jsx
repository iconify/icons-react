import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb45ydbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mb45ydbwm"/>`,
		"fallback": "lucide-extended:folder-plus-filled",
	});
}

export default Component;
