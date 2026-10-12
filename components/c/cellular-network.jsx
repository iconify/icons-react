import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf8asjb5u.css';
import '../../css/x/xxw0qmgoi.css';
import '../../css/o/oktq18ber.css';
import '../../css/s/sez8z7yml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vf8asjb5u"/><circle transform="rotate(90 12 9.1)" class="xxw0qmgoi"/><circle transform="rotate(90 12 9.1)" class="oktq18ber"/><path class="sez8z7yml"/></g>`,
		"fallback": "andrsrxn:cellular-network",
	});
}

export default Component;
