import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0ddbbc4m.css';
import '../../css/a/a0aeo-w9h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="s0ddbbc4m"/><path class="a0aeo-w9h"/></g>`,
		"fallback": "cryptocurrency-color:beam",
	});
}

export default Component;
