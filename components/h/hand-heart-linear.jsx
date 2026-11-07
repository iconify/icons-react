import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/an1auylmc.css';
import '../../css/r/r_kt-dgff.css';
import '../../css/e/eck4ylbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="an1auylmc"/><path class="r_kt-dgff"/><path class="eck4ylbag"/></g>`,
		"fallback": "solar:hand-heart-linear",
	});
}

export default Component;
