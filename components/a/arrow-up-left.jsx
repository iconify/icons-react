import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h6d4dbc9x.css';
import '../../css/m/meebfmb5a.css';
import '../../css/o/o5_-zhbug.css';
import '../../css/d/d4vhvib2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="h6d4dbc9x wm-shadow"/><path class="meebfmb5a wm-shadow"/><path class="o5_-zhbug"/><path class="d4vhvib2j"/></g>`,
		"fallback": "withicons-brutal:arrow-up-left",
	});
}

export default Component;
