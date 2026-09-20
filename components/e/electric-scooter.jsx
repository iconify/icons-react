import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sc8wo_bpe.css';
import '../../css/u/ug46k0pnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sc8wo_bpe"/><path class="ug46k0pnz"/></g>`,
		"fallback": "tabler:electric-scooter",
	});
}

export default Component;
