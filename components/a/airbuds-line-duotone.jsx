import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3s_59bff.css';
import '../../css/o/o6tcadbfr.css';
import '../../css/b/bop1i6gap.css';
import '../../css/h/h_7-4osld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z3s_59bff"/><path class="o6tcadbfr"/><path class="bop1i6gap"/><path class="h_7-4osld"/></g>`,
		"fallback": "solar:airbuds-line-duotone",
	});
}

export default Component;
