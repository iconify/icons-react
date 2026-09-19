import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd0l9kb6p.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd0l9kb6p"/>`,
		"fallback": "fontisto:android",
	});
}

export default Component;
