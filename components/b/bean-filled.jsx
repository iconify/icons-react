import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4d3_byfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n4d3_byfm"/>`,
		"fallback": "lucide-extended:bean-filled",
	});
}

export default Component;
