import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvpzb3bwd.css';
import '../../css/j/jyohh7udh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nvpzb3bwd"/><path class="jyohh7udh"/></g>`,
		"fallback": "tabler:home",
	});
}

export default Component;
