import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nlnjivm0k.css';
import '../../css/n/ne97iz-kz.css';
import '../../css/w/w30fyozde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nlnjivm0k"/><path class="ne97iz-kz"/><path class="w30fyozde"/></g>`,
		"fallback": "vadivam:calendar-clock",
	});
}

export default Component;
