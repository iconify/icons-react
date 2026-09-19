import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyyxxqb3x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyyxxqb3x"/>`,
		"fallback": "dashicons:editor-code-duplicate",
	});
}

export default Component;
