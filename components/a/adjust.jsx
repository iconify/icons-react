import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y4bh_tw_t.css';
import '../../css/k/ksle7klhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y4bh_tw_t"/><path class="ksle7klhk"/></g>`,
		"fallback": "struq:adjust",
	});
}

export default Component;
