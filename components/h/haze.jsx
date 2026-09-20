import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyn0-_b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyn0-_b9n"/>`,
		"fallback": "lucide:haze",
	});
}

export default Component;
