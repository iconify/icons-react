import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f_1kiub1c.css';
import '../../css/m/ma4wo4b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f_1kiub1c"/><path class="ma4wo4b-c"/></g>`,
		"fallback": "tabler:briefcase",
	});
}

export default Component;
