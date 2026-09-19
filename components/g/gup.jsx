import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp_fcob4a.css';
import '../../css/a/a-vqisbui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vp_fcob4a"/><path class="a-vqisbui"/></g>`,
		"fallback": "cryptocurrency-color:gup",
	});
}

export default Component;
