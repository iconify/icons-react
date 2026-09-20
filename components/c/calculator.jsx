import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwj_pnbbj.css';
import '../../css/y/y3p79xb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mwj_pnbbj"/><path class="y3p79xb6u"/></g>`,
		"fallback": "tabler:calculator",
	});
}

export default Component;
