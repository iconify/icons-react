import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xua8f1yhz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xua8f1yhz"/>`,
		"fallback": "la:drum-steelpan",
	});
}

export default Component;
