import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd1yx_bjk.css';
import '../../css/q/qu-z_obdl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd1yx_bjk"/><path class="qu-z_obdl"/>`,
		"fallback": "material-icon-theme:folder-connection",
	});
}

export default Component;
