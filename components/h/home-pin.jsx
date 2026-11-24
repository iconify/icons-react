import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwe2avbpg.css';
import '../../css/u/u8lb0ebnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hwe2avbpg"/><path class="u8lb0ebnm"/></g>`,
		"fallback": "tabler:home-pin",
	});
}

export default Component;
