import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/q4pq0eb_g.css';
import '../../css/n/nki4i75-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="q4pq0eb_g"/><path class="nki4i75-y"/></g>`,
		"fallback": "akar-icons:basket",
	});
}

export default Component;
