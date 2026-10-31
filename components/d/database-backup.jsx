import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s9fdekqig.css';
import '../../css/z/zakzyxgdv.css';
import '../../css/p/pqk2s-bcy.css';
import '../../css/v/v_9c2zbsp.css';
import '../../css/w/w5yx3zbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s9fdekqig wm-shadow"/><path class="wm-shadow zakzyxgdv"/><path class="pqk2s-bcy"/><path class="v_9c2zbsp"/><path class="w5yx3zbwt wm-s"/></g>`,
		"fallback": "withicons-brutal:database-backup",
	});
}

export default Component;
