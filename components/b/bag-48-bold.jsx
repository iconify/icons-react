import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqivvfbyi.css';
import '../../css/h/hjrxqjbmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqivvfbyi"/><path class="hjrxqjbmo"/>`,
		"fallback": "energy-icons:bag-48-bold",
	});
}

export default Component;
