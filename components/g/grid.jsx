import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm5w3vbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm5w3vbcu"/>`,
		"fallback": "ci:grid",
	});
}

export default Component;
