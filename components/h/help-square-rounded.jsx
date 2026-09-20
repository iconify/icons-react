import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aj47u0vwo.css';
import '../../css/h/hmuxfdcal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aj47u0vwo"/><path class="hmuxfdcal"/></g>`,
		"fallback": "tabler:help-square-rounded",
	});
}

export default Component;
