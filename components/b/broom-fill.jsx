import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u723w4xsl.css';
import '../../css/w/wfmckqbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u723w4xsl"/><path class="wfmckqbpo"/></g>`,
		"fallback": "keyline-icons:broom-fill",
	});
}

export default Component;
