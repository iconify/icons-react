import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owtfrepbq.css';
import '../../css/y/yfox0ob1f.css';
import '../../css/u/u2hfaj0rl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="owtfrepbq"/><path clip-rule="evenodd" class="yfox0ob1f"/><path clip-rule="evenodd" class="u2hfaj0rl"/></g>`,
		"fallback": "streamline-plump-color:bicycle-bike-flat",
	});
}

export default Component;
