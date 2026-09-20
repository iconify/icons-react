import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsxw9ekqb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsxw9ekqb"/>`,
		"fallback": "la:dizzy-solid",
	});
}

export default Component;
