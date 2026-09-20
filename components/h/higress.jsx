import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g5h68cqmk.css';
import '../../css/m/m-7q__ocg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g5h68cqmk"/><path class="m-7q__ocg"/></g>`,
		"fallback": "thesvg:higress",
	});
}

export default Component;
