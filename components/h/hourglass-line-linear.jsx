import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f7ok1m12w.css';
import '../../css/s/sm_z9gbwi.css';
import '../../css/j/jipvxn5py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f7ok1m12w"/><path class="sm_z9gbwi"/><path class="jipvxn5py"/></g>`,
		"fallback": "solar:hourglass-line-linear",
	});
}

export default Component;
