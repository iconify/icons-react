import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/une91sbso.css';
import '../../css/c/cbpc7btec.css';
import '../../css/l/lsfe1172a.css';
import '../../css/s/s0ed558ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="une91sbso wm-shadow"/><path class="cbpc7btec wm-shadow"/><path class="lsfe1172a"/><path class="s0ed558ma"/></g>`,
		"fallback": "withicons-brutal:gamepad",
	});
}

export default Component;
