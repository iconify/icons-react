import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u82r74byt.css';
import '../../css/l/l6g6ded7e.css';
import '../../css/o/o4d6heb9o.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/n9yopmb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u82r74byt"/><path class="l6g6ded7e"/><path class="o4d6heb9o"/><path class="u5h8llb9a"/><path class="n9yopmb_r"/></g>`,
		"fallback": "andrsrxn:globe-warning",
	});
}

export default Component;
