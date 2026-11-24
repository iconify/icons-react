import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufep9qyxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufep9qyxh"/>`,
		"fallback": "lucide-extended:cloud-moon-filled",
	});
}

export default Component;
