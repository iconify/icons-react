import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oomfx9bpg.css';
import '../../css/f/fe20j2bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oomfx9bpg"/><path class="fe20j2bpo"/></g>`,
		"fallback": "tabler:building-hospital",
	});
}

export default Component;
