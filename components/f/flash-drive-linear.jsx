import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bcgh91bjm.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/n/nt3og-bhm.css';
import '../../css/i/iofcxjb4n.css';
import '../../css/g/gvinp5b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bcgh91bjm"/><path class="fyr67fbfm"/><path class="nt3og-bhm"/><path class="iofcxjb4n"/><path class="gvinp5b1p"/></g>`,
		"fallback": "solar:flash-drive-linear",
	});
}

export default Component;
