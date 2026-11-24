import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akdj-thul.css';
import '../../css/g/gb1ceubcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akdj-thul"/><path class="gb1ceubcl"/>`,
		"fallback": "lucide-extended:cloud-fog-filled",
	});
}

export default Component;
