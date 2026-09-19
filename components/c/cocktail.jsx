import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r__zncc8s.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r__zncc8s"/>`,
		"fallback": "fontisto:cocktail",
	});
}

export default Component;
