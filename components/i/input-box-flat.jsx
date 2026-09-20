import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shy-kwbwv.css';
import '../../css/d/dngiteb4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shy-kwbwv"/><path class="dngiteb4v"/></g>`,
		"fallback": "streamline-plump-color:input-box-flat",
	});
}

export default Component;
