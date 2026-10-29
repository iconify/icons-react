import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zlkpuxbnl.css';
import '../../css/b/b1djw6bjn.css';
import '../../css/n/na0nesucf.css';
import '../../css/o/o3oli_b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zlkpuxbnl"/><path class="b1djw6bjn wm-a"/><path class="na0nesucf wm-k"/><path class="o3oli_b6e wm-a"/></g>`,
		"fallback": "withicons:alert-triangle-sketch",
	});
}

export default Component;
