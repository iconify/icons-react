import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iy3ab66ne.css';
import '../../css/z/zy02t9bhd.css';
import '../../css/k/kugl8-b3l.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iy3ab66ne"/><circle transform="rotate(45 17.657 6.343)" class="zy02t9bhd"/><circle transform="rotate(45 6.343 17.657)" class="kugl8-b3l"/><circle transform="rotate(45 12 12)" class="h_tsn8bxt"/></g>`,
		"fallback": "majesticons:atom-2-line",
	});
}

export default Component;
