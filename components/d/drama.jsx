import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nq8t-vbah.css';
import '../../css/e/ecrufib8j.css';
import '../../css/c/caezqu8sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nq8t-vbah"/><path class="ecrufib8j"/><path class="caezqu8sm"/></g>`,
		"fallback": "hugeicons:drama",
	});
}

export default Component;
