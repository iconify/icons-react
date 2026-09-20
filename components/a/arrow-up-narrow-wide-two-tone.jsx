import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/efcdqybup.css';
import '../../css/a/alpsapn4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="efcdqybup"/><path class="alpsapn4b"/></g>`,
		"fallback": "keyline-icons:arrow-up-narrow-wide-two-tone",
	});
}

export default Component;
