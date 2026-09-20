import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z145zhb_r.css';
import '../../css/v/vz6fkkjnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z145zhb_r"/><path class="vz6fkkjnh"/></g>`,
		"fallback": "streamline-plump-color:facebook-1-flat",
	});
}

export default Component;
