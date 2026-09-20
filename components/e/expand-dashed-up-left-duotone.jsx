import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ad49i-8hk.css';
import '../../css/q/q1srdbcur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ad49i-8hk"/><path class="q1srdbcur"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-left-duotone",
	});
}

export default Component;
