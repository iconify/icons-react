import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbanj-ttg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbanj-ttg"/>`,
		"fallback": "si:close-square-line",
	});
}

export default Component;
