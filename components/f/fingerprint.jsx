import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z8k80qb6m.css';
import '../../css/g/gwuafinum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="z8k80qb6m"/><path class="gwuafinum"/></g>`,
		"fallback": "withicons-retro:fingerprint",
	});
}

export default Component;
