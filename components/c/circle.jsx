import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba61gnnld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba61gnnld"/>`,
		"fallback": "cil:circle",
	});
}

export default Component;
