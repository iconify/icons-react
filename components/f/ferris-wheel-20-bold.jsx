import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol0wd5rgv.css';
import '../../css/w/wkt-wub-t.css';
import '../../css/e/e4zi4ibxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol0wd5rgv"/><path class="wkt-wub-t"/><path class="e4zi4ibxn"/>`,
		"fallback": "energy-icons:ferris-wheel-20-bold",
	});
}

export default Component;
