import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxp1jqbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxp1jqbcz"/>`,
		"fallback": "gridicons:external",
	});
}

export default Component;
