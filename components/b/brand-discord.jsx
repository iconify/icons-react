import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a6mwcibor.css';
import '../../css/u/uw8igebtn.css';
import '../../css/x/xg5g8jbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a6mwcibor"/><path class="uw8igebtn"/><path class="xg5g8jbtr"/></g>`,
		"fallback": "tabler:brand-discord",
	});
}

export default Component;
