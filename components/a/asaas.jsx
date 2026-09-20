import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndm8ctsqc.css';

const viewBox = {"width":100,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndm8ctsqc"/>`,
		"fallback": "thesvg-color:asaas",
	});
}

export default Component;
