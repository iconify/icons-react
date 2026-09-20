import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbjm81b0y.css';
import '../../css/j/jr-udybsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lbjm81b0y"/><path class="jr-udybsq"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-fill",
	});
}

export default Component;
