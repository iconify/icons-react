import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma5rg2bxg.css';

const viewBox = {"width":1132,"height":626};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma5rg2bxg"/>`,
		"fallback": "ls:heteml",
	});
}

export default Component;
