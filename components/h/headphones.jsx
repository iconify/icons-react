import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rgxkoxbvw.css';
import '../../css/g/g7mteob6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rgxkoxbvw"/><path class="g7mteob6e"/></g>`,
		"fallback": "feather:headphones",
	});
}

export default Component;
