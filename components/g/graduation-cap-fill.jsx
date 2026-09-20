import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c19oaoeat.css';
import '../../css/r/r06lfct9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c19oaoeat"/><path class="r06lfct9f"/></g>`,
		"fallback": "keyline-icons:graduation-cap-fill",
	});
}

export default Component;
