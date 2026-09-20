import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptfcy83vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptfcy83vs"/>`,
		"fallback": "mdi:handcuffs",
	});
}

export default Component;
