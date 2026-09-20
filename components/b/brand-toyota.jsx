import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ep1475bim.css';
import '../../css/p/phdl06g0n.css';
import '../../css/n/nrpx-15tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ep1475bim"/><path class="phdl06g0n"/><path class="nrpx-15tq"/></g>`,
		"fallback": "tabler:brand-toyota",
	});
}

export default Component;
