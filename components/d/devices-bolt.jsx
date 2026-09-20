import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cdz5eh_jl.css';
import '../../css/j/jab4ynbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cdz5eh_jl"/><path class="jab4ynbex"/></g>`,
		"fallback": "tabler:devices-bolt",
	});
}

export default Component;
