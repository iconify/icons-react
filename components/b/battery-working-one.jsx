import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwlercjan.css';
import '../../css/a/as_el_bcn.css';
import '../../css/c/cbdyhq4wv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="iwlercjan"/><path class="as_el_bcn"/><path class="cbdyhq4wv"/></g>`,
		"fallback": "icon-park-outline:battery-working-one",
	});
}

export default Component;
