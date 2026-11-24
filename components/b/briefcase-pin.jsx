import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1tex0gdj.css';
import '../../css/m/m9z8vhbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1tex0gdj"/><path class="m9z8vhbxc"/></g>`,
		"fallback": "tabler:briefcase-pin",
	});
}

export default Component;
