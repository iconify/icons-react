import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vuzid9bqa.css';
import '../../css/p/pw9ehkiqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vuzid9bqa"/><path class="pw9ehkiqw"/></g>`,
		"fallback": "lucide:cloud-upload",
	});
}

export default Component;
