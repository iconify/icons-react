import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcacmsbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcacmsbyu"/>`,
		"fallback": "lucide-extended:gallery-vertical-filled",
	});
}

export default Component;
