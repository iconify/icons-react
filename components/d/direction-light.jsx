import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/qa60wpbeh.css';
import '../../css/a/aescj0b_y.css';
import '../../css/z/zuii_hsfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="qa60wpbeh"/><path class="aescj0b_y"/><path class="zuii_hsfp"/></g>`,
		"fallback": "lets-icons:direction-light",
	});
}

export default Component;
