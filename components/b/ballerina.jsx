import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3fpshekb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3fpshekb"/>`,
		"fallback": "devicon:ballerina",
	});
}

export default Component;
