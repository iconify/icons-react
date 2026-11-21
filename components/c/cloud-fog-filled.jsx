import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akdj-thul.css';
import '../../css/v/va0b3zbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akdj-thul"/><path class="va0b3zbzu"/>`,
		"fallback": "lucide-extended:cloud-fog-filled",
	});
}

export default Component;
