import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/maywn-bul.css';
import '../../css/g/g1_2eebtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="maywn-bul"/><path class="g1_2eebtv"/></g>`,
		"fallback": "lucide-lab:football-helmet",
	});
}

export default Component;
