import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkqr1j59e.css';
import '../../css/g/gx519cbvi.css';
import '../../css/y/yv842m9yr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkqr1j59e"/><path class="gx519cbvi"/><path class="yv842m9yr"/>`,
		"fallback": "energy-icons:ground-mount-20-bold",
	});
}

export default Component;
