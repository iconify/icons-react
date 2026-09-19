import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubv9gybnc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubv9gybnc"/>`,
		"fallback": "foundation:comment-quotes",
	});
}

export default Component;
