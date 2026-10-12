import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khu98rbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="khu98rbzb"/>`,
		"fallback": "lucide-extended:circle-user-round-filled",
	});
}

export default Component;
