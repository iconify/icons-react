import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5s1ejbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5s1ejbxf"/>`,
		"fallback": "vadivam:door-closed-cog",
	});
}

export default Component;
