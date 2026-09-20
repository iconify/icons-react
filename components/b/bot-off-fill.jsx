import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbuu_86jj.css';
import '../../css/p/p-gyd30ao.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="fbuu_86jj"/><path class="p-gyd30ao"/><path class="sp3ujwwyq"/></g>`,
		"fallback": "keyline-icons:bot-off-fill",
	});
}

export default Component;
