import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fplwr48hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fplwr48hg"/>`,
		"fallback": "si:input-line",
	});
}

export default Component;
