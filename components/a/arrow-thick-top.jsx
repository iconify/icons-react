import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw-jh6bei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw-jh6bei"/>`,
		"fallback": "cil:arrow-thick-top",
	});
}

export default Component;
