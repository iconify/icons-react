import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zwqgm0b6n.css';
import '../../css/k/ki5b-pb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zwqgm0b6n"/><path class="ki5b-pb_s"/></g>`,
		"fallback": "tabler:git-pull-request-locked-ai",
	});
}

export default Component;
