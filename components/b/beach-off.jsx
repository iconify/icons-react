import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uy8ra-b7p.css';
import '../../css/a/ajheqhb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uy8ra-b7p"/><path class="ajheqhb7l"/></g>`,
		"fallback": "tabler:beach-off",
	});
}

export default Component;
