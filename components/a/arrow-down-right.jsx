import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cmgbt1b6s.css';
import '../../css/a/a_68u1dmn.css';
import '../../css/h/hsy51r07k.css';
import '../../css/g/gv9q0vb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cmgbt1b6s wm-shadow"/><path class="a_68u1dmn wm-shadow"/><path class="hsy51r07k"/><path class="gv9q0vb0f"/></g>`,
		"fallback": "withicons-brutal:arrow-down-right",
	});
}

export default Component;
