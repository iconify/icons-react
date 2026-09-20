import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghvfc0l6u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghvfc0l6u"/>`,
		"fallback": "picon:devices",
	});
}

export default Component;
