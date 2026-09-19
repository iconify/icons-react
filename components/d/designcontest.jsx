import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyxrfty-p.css';

const viewBox = {"width":961,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyxrfty-p"/>`,
		"fallback": "whh:designcontest",
	});
}

export default Component;
