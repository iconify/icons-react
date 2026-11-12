import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsh0myb_d.css';
import '../../css/f/fys3dubax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bsh0myb_d"/><path class="fys3dubax"/></g>`,
		"fallback": "tabler:clock-spark",
	});
}

export default Component;
