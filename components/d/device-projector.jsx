import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c-lme1bth.css';
import '../../css/b/b4hspab-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c-lme1bth"/><path class="b4hspab-a"/></g>`,
		"fallback": "tabler:device-projector",
	});
}

export default Component;
