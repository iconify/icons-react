import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2ga7sat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae2ga7sat"/>`,
		"fallback": "simple-icons:embarcadero",
	});
}

export default Component;
