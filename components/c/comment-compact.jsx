import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amw_g50ii.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amw_g50ii"/>`,
		"fallback": "codicon:comment-compact",
	});
}

export default Component;
