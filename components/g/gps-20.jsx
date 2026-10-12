import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhil_xbve.css';
import '../../css/h/hedtevnmm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhil_xbve"/><path class="hedtevnmm"/>`,
		"fallback": "energy-icons:gps-20",
	});
}

export default Component;
