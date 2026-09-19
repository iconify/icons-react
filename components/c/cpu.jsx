import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfcgfdhdl.css';
import '../../css/r/rlckgj5ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="vfcgfdhdl"/><path class="rlckgj5ga"/></g>`,
		"fallback": "feather:cpu",
	});
}

export default Component;
