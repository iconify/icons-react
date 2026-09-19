import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4y9y-bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4y9y-bcq"/>`,
		"fallback": "heroicons:code-bracket-square",
	});
}

export default Component;
