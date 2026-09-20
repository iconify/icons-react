import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z2w9qje6t.css';
import '../../css/m/mm2_i0bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="z2w9qje6t"/><path class="mm2_i0bzt"/></g>`,
		"fallback": "lucide-lab:hockey",
	});
}

export default Component;
