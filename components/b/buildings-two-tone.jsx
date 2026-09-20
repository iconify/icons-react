import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwglgkb1l.css';
import '../../css/x/x9r-uhjkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nwglgkb1l"/><path class="x9r-uhjkw"/></g>`,
		"fallback": "keyline-icons:buildings-two-tone",
	});
}

export default Component;
