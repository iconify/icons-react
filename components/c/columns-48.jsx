import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htetqt6dv.css';
import '../../css/j/jfdl44b3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htetqt6dv"/><path class="jfdl44b3i"/>`,
		"fallback": "energy-icons:columns-48",
	});
}

export default Component;
