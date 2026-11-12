import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/txofz484p.css';
import '../../css/n/nbkh5vbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="txofz484p"/><path class="nbkh5vbsw"/></g>`,
		"fallback": "tabler:cash-banknote-dollar",
	});
}

export default Component;
