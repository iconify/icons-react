import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omzzonb-u.css';
import '../../css/y/yo0h3bcre.css';
import '../../css/j/j0tm1ybik.css';
import '../../css/c/c_wcp_b-e.css';
import '../../css/r/rpprq9hjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omzzonb-u"/><path class="yo0h3bcre"/><path class="j0tm1ybik"/><path class="c_wcp_b-e"/><path class="rpprq9hjl"/></g>`,
		"fallback": "streamline-ultimate-color:design-tool-fibonacci",
	});
}

export default Component;
