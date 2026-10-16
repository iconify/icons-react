import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd9tt7pmf.css';
import '../../css/u/uv305zbwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd9tt7pmf"/><path class="uv305zbwv"/>`,
		"fallback": "energy-icons:data-pipeline-48-bold",
	});
}

export default Component;
