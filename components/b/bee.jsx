import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8m4aelen.css';
import '../../css/i/isi2h7q2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8m4aelen"/><path class="isi2h7q2u"/></g>`,
		"fallback": "lucide-lab:bee",
	});
}

export default Component;
