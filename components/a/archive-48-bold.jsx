import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8xdzkbcj.css';
import '../../css/o/oky5uoojn.css';
import '../../css/s/swikctbux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8xdzkbcj"/><path class="oky5uoojn"/><path class="swikctbux"/>`,
		"fallback": "energy-icons:archive-48-bold",
	});
}

export default Component;
