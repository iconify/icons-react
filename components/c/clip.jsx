import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nggtlqu-b.css';

const viewBox = {"width":718,"height":701};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nggtlqu-b"/>`,
		"fallback": "ls:clip",
	});
}

export default Component;
