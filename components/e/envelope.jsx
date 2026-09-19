import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc9h1nboe.css';

const viewBox = {"width":750,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc9h1nboe"/>`,
		"fallback": "il:envelope",
	});
}

export default Component;
