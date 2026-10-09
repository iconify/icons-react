import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7tl3x9ws.css';
import '../../css/b/bbz-6ubma.css';
import '../../css/l/lj5rvulqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7tl3x9ws"/><path class="bbz-6ubma"/><path class="lj5rvulqf"/>`,
		"fallback": "energy-icons:external-link-48",
	});
}

export default Component;
