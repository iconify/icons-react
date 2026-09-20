import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l72ym8u0j.css';
import '../../css/f/fwo4s-hri.css';
import '../../css/t/t_3o8abnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l72ym8u0j"/><path class="fwo4s-hri"/><path class="t_3o8abnl"/></g>`,
		"fallback": "tabler:file-infinity",
	});
}

export default Component;
