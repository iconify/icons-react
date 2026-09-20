import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc_7a9b-l.css';
import '../../css/l/l_ozk_bzq.css';
import '../../css/r/rmh3v46zl.css';
import '../../css/r/rdo5sx2do.css';

const viewBox = {"width":105.833,"height":73.391};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dc_7a9b-l"><path class="l_ozk_bzq"/><path class="rmh3v46zl"/><path class="rdo5sx2do"/></g>`,
		"fallback": "thesvg-color:commonwealth-bank",
	});
}

export default Component;
