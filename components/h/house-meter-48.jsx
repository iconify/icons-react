import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/s/sjprxildg.css';
import '../../css/o/o0i8t4b7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="sjprxildg"/><path class="o0i8t4b7m"/>`,
		"fallback": "energy-icons:house-meter-48",
	});
}

export default Component;
