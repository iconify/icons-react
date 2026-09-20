import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/khfvsobvn.css';
import '../../css/x/xp1qufben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="khfvsobvn"/><path class="xp1qufben"/></g>`,
		"fallback": "tabler:box-model",
	});
}

export default Component;
