import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phvznzb4o.css';
import '../../css/a/ami7r2bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="phvznzb4o"/><path class="ami7r2bnw"/></g>`,
		"fallback": "coolicons:external-link-duocolor-round",
	});
}

export default Component;
