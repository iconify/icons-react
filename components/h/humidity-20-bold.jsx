import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b68k1jbxl.css';
import '../../css/d/despmrd_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b68k1jbxl"/><path class="despmrd_s"/>`,
		"fallback": "energy-icons:humidity-20-bold",
	});
}

export default Component;
