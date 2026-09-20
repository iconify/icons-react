import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzcqmnfdu.css';
import '../../css/w/whzp95bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzcqmnfdu"/><path class="whzp95bgv"/></g>`,
		"fallback": "keyline-icons:boy-two-tone",
	});
}

export default Component;
