import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s69n4bbxm.css';
import '../../css/t/tbdvphbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s69n4bbxm"/><path class="tbdvphbbs"/></g>`,
		"fallback": "tabler:circle-open-arrow-up",
	});
}

export default Component;
