import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gndbq0bkl.css';
import '../../css/d/dpokkjq8r.css';
import '../../css/m/mazoy0feo.css';
import '../../css/c/c9rugwb_d.css';
import '../../css/n/niumi_b1d.css';
import '../../css/s/stgcugbpp.css';
import '../../css/f/fng8c12rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gndbq0bkl"/><path class="dpokkjq8r"/><path class="mazoy0feo"/><path class="c9rugwb_d"/><path class="niumi_b1d"/><path class="stgcugbpp"/><path class="fng8c12rh"/></g>`,
		"fallback": "solar:barcode-linear",
	});
}

export default Component;
