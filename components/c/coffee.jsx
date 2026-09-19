import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7lann--y.css';
import '../../css/e/e1cshqwcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7lann--y"/><path class="e1cshqwcj"/></g>`,
		"fallback": "akar-icons:coffee",
	});
}

export default Component;
