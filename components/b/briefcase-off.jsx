import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekp4ad8ng.css';
import '../../css/f/fjgyldote.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ekp4ad8ng"/><path class="fjgyldote"/></g>`,
		"fallback": "tabler:briefcase-off",
	});
}

export default Component;
