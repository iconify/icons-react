import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywj5a93ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywj5a93ad"/>`,
		"fallback": "lucide-extended:car-battery-filled",
	});
}

export default Component;
