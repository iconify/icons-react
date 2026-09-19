import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li61mcc3q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li61mcc3q"/>`,
		"fallback": "devicon:cobol",
	});
}

export default Component;
