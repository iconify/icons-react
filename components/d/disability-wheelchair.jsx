import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwlx8zbnc.css';
import '../../css/m/mu-ztlk9y.css';
import '../../css/h/ha9hvp8dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwlx8zbnc"/><path class="mu-ztlk9y"/><path class="ha9hvp8dc"/></g>`,
		"fallback": "streamline-ultimate-color:disability-wheelchair",
	});
}

export default Component;
