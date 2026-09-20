import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn4sus4me.css';
import '../../css/q/q6dgyrq9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path vector-effect="non-scaling-stroke" class="pn4sus4me"/><path vector-effect="non-scaling-stroke" class="q6dgyrq9a"/></g>`,
		"fallback": "wordpress:currency-dollar",
	});
}

export default Component;
