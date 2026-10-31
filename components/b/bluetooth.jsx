import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/prry2blhe.css';
import '../../css/f/fk8tujbas.css';
import '../../css/n/nu79pab_i.css';
import '../../css/s/ssh_upsag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="prry2blhe wm-shadow"/><path class="fk8tujbas wm-shadow"/><path class="nu79pab_i"/><path class="ssh_upsag"/></g>`,
		"fallback": "withicons-brutal:bluetooth",
	});
}

export default Component;
