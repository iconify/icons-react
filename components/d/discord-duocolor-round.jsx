import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w729gvbre.css';
import '../../css/a/a6mwcibor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w729gvbre"/><path class="a6mwcibor"/></g>`,
		"fallback": "coolicons:discord-duocolor-round",
	});
}

export default Component;
