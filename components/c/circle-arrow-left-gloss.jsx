import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfvnjqbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfvnjqbra"/>`,
		"fallback": "withicons:circle-arrow-left-gloss",
	});
}

export default Component;
