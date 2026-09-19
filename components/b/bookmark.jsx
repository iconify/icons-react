import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brh31tegt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brh31tegt"/>`,
		"fallback": "griddy-icons:bookmark",
	});
}

export default Component;
