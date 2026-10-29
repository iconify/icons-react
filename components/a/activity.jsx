import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fopi-dtzo.css';
import '../../css/m/mbp93tqub.css';
import '../../css/z/zkj8ox4xx.css';
import '../../css/w/wq9vu8bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fopi-dtzo wm-k"/><path class="mbp93tqub wm-k"/><path class="wm-k zkj8ox4xx"/><path class="wm-shine wq9vu8bcw"/></g>`,
		"fallback": "withicons-anime:activity",
	});
}

export default Component;
