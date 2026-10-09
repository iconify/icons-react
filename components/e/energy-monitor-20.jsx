import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5nifvbes.css';
import '../../css/w/wewzkacif.css';
import '../../css/p/ptha_9bng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5nifvbes"/><path class="wewzkacif"/><path class="ptha_9bng"/>`,
		"fallback": "energy-icons:energy-monitor-20",
	});
}

export default Component;
