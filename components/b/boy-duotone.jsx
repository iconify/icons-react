import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzcqmnfdu.css';
import '../../css/u/ud44bbcsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzcqmnfdu"/><path class="ud44bbcsb"/></g>`,
		"fallback": "keyline-icons:boy-duotone",
	});
}

export default Component;
