import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2oac6j-u.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2oac6j-u"/>`,
		"fallback": "fa:500px",
	});
}

export default Component;
