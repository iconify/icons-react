import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcg5-ob4f.css';
import '../../css/b/bw6ndrb0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mcg5-ob4f"/><path class="bw6ndrb0r"/></g>`,
		"fallback": "streamline-plump-color:diamond-1-flat",
	});
}

export default Component;
