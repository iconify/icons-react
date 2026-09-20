import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7i89iy-u.css';
import '../../css/v/v4_-uz5kn.css';
import '../../css/v/vm-oljptf.css';
import '../../css/t/ti73fqlrr.css';
import '../../css/y/yo8y0bcgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="x7i89iy-u"/><path class="v4_-uz5kn"/><rect class="vm-oljptf"/><path class="ti73fqlrr"/><path class="yo8y0bcgm"/></g>`,
		"fallback": "lucide-lab:bottle-dispenser",
	});
}

export default Component;
