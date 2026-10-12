import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzrmuq56m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzrmuq56m"/>`,
		"fallback": "lucide-extended:badge-check-filled",
	});
}

export default Component;
