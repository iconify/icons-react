import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyv-v7btb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyv-v7btb"/>`,
		"fallback": "pinhead:hands-sign-language-interpretation",
	});
}

export default Component;
