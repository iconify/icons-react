import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acoqlqb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acoqlqb7k"/>`,
		"fallback": "bxs:dollar-circle",
	});
}

export default Component;
