import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfau3qmaw.css';
import '../../css/c/ch_3s0byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tfau3qmaw"/><path class="ch_3s0byl"/></g>`,
		"fallback": "lucide:baby",
	});
}

export default Component;
