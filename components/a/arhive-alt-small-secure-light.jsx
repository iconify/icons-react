import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u1x-e7bql.css';
import '../../css/o/ohl5bf8km.css';
import '../../css/m/m81p5qbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="u1x-e7bql"/><path class="ohl5bf8km"/><path class="m81p5qbvt"/></g>`,
		"fallback": "lets-icons:arhive-alt-small-secure-light",
	});
}

export default Component;
