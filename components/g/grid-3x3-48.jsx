import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htetqt6dv.css';
import '../../css/w/w54w-fbij.css';
import '../../css/s/sivybx15u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htetqt6dv"/><path class="w54w-fbij"/><path class="sivybx15u"/>`,
		"fallback": "energy-icons:grid-3x3-48",
	});
}

export default Component;
