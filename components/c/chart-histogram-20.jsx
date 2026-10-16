import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/d/dud29m81y.css';
import '../../css/a/ao3jx10od.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="dud29m81y"/><path class="ao3jx10od"/>`,
		"fallback": "energy-icons:chart-histogram-20",
	});
}

export default Component;
