import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu8rc3z3u.css';
import '../../css/w/we9rf_90t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="iu8rc3z3u"/><path class="we9rf_90t"/></g>`,
		"fallback": "cryptocurrency-color:gusd",
	});
}

export default Component;
