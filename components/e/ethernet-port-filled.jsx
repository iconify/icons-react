import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqb6bwbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqb6bwbck"/>`,
		"fallback": "lucide-extended:ethernet-port-filled",
	});
}

export default Component;
