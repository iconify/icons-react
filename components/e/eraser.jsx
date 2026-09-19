import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfjone-3k.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfjone-3k"/>`,
		"fallback": "fontisto:eraser",
	});
}

export default Component;
