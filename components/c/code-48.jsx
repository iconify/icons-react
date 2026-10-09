import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm_-eumxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm_-eumxf"/>`,
		"fallback": "energy-icons:code-48",
	});
}

export default Component;
