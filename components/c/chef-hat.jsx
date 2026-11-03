import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohuob9vol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohuob9vol"/>`,
		"fallback": "lucide:chef-hat",
	});
}

export default Component;
