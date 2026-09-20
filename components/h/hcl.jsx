import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd1rn1bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd1rn1bsp"/>`,
		"fallback": "simple-icons:hcl",
	});
}

export default Component;
