import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8b9igb2o.css';
import '../../css/d/d3c0vccgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8b9igb2o"/><path class="d3c0vccgi"/>`,
		"fallback": "energy-icons:envelope-open-48-bold",
	});
}

export default Component;
