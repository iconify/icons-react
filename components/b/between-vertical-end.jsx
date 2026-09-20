import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c3veszb2o.css';
import '../../css/j/jf5s6ugur.css';
import '../../css/d/dwec3ac1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="c3veszb2o"/><path class="jf5s6ugur"/><rect class="dwec3ac1j"/></g>`,
		"fallback": "lucide:between-vertical-end",
	});
}

export default Component;
