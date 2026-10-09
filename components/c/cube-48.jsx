import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp2u-9b8d.css';
import '../../css/j/jznb33btn.css';
import '../../css/v/v30al6b2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp2u-9b8d"/><path class="jznb33btn"/><path class="v30al6b2c"/>`,
		"fallback": "energy-icons:cube-48",
	});
}

export default Component;
