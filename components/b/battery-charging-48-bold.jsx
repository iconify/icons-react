import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmtj78bqh.css';
import '../../css/g/gzrd91bbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmtj78bqh"/><path class="gzrd91bbp"/>`,
		"fallback": "energy-icons:battery-charging-48-bold",
	});
}

export default Component;
