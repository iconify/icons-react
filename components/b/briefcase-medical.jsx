import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0sdi7f7k.css';
import '../../css/e/et8h5kbcp.css';
import '../../css/r/r_nkppbgx.css';
import '../../css/y/y6mag89-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c0sdi7f7k wm-shadow"/><path class="et8h5kbcp wm-shadow"/><path class="r_nkppbgx"/><path class="y6mag89-j"/></g>`,
		"fallback": "withicons-brutal:briefcase-medical",
	});
}

export default Component;
