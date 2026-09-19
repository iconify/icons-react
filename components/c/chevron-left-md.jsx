import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej6w2kb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej6w2kb-w"/>`,
		"fallback": "ci:chevron-left-md",
	});
}

export default Component;
