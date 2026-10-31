import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bi4cl48-s.css';
import '../../css/c/ckjxvubgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bi4cl48-s"/><path class="ckjxvubgq"/></g>`,
		"fallback": "coolicons:git-pull-request-draft-duocolor-round",
	});
}

export default Component;
