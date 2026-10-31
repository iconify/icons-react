import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-_zycb2u.css';
import '../../css/i/ilekwnb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-_zycb2u"/><path class="ilekwnb0p"/></g>`,
		"fallback": "coolicons:bell-off-duocolor-round",
	});
}

export default Component;
