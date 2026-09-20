import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evjfzsbxa.css';
import '../../css/j/jq2bz27sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="evjfzsbxa"/><path class="jq2bz27sq"/></g>`,
		"fallback": "reicon:delivery-duotone",
	});
}

export default Component;
