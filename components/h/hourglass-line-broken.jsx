import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ik2qwi98m.css';
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
		"content": `<g class="ipq1z-bjh"><path class="ik2qwi98m"/><path class="sm_z9gbwi"/><path class="jipvxn5py"/></g>`,
		"fallback": "solar:hourglass-line-broken",
	});
}

export default Component;
