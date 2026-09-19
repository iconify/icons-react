import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr9ofrbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr9ofrbkv"/>`,
		"fallback": "bx:bxs-cube",
	});
}

export default Component;
