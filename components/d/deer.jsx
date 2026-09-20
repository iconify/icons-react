import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxnt0mb0m.css';
import '../../css/w/wnpvwrb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jxnt0mb0m"/><path class="wnpvwrb9f"/></g>`,
		"fallback": "tabler:deer",
	});
}

export default Component;
