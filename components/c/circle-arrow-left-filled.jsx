import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtu0a-whs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mtu0a-whs"/>`,
		"fallback": "lucide-extended:circle-arrow-left-filled",
	});
}

export default Component;
