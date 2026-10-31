import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ulqic86jp.css';
import '../../css/m/mtt62ulyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ulqic86jp"/><path class="mtt62ulyt"/></g>`,
		"fallback": "coolicons:github-duocolor-round",
	});
}

export default Component;
