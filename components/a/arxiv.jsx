import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoh_pqbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoh_pqbiy"/>`,
		"fallback": "thesvg-color:arxiv",
	});
}

export default Component;
