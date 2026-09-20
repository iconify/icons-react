import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a21rkqqeh.css';
import '../../css/v/v67rzy6br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a21rkqqeh"/><path class="v67rzy6br"/></g>`,
		"fallback": "tabler:camera-x",
	});
}

export default Component;
