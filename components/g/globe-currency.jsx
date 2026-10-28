import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u82r74byt.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/g/g6owexbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u82r74byt"/><path class="u5h8llb9a"/><path class="g6owexbgz"/></g>`,
		"fallback": "andrsrxn:globe-currency",
	});
}

export default Component;
