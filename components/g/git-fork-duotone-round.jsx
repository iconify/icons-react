import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8ly_dbnf.css';
import '../../css/k/kqbceklea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8ly_dbnf"/><path class="kqbceklea"/></g>`,
		"fallback": "coolicons:git-fork-duotone-round",
	});
}

export default Component;
