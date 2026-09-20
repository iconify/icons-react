import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm1bh9b5l.css';
import '../../css/n/n3p0cac3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm1bh9b5l"/><path clip-rule="evenodd" class="n3p0cac3w"/>`,
		"fallback": "si:ai-fact-alt-1-fill",
	});
}

export default Component;
