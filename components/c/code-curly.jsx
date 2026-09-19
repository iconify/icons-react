import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kog2ww13f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kog2ww13f"/>`,
		"fallback": "bx:code-curly",
	});
}

export default Component;
