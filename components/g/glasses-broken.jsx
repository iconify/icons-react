import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sxf-53b3h.css';
import '../../css/z/z5v2vbbdr.css';
import '../../css/t/tvsmzbc4f.css';
import '../../css/k/kmnkyjbzd.css';
import '../../css/d/dpot8pbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sxf-53b3h"/><circle class="z5v2vbbdr"/><path class="tvsmzbc4f"/><path class="kmnkyjbzd"/><path class="dpot8pbuy"/></g>`,
		"fallback": "solar:glasses-broken",
	});
}

export default Component;
