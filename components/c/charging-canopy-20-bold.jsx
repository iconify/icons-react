import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfnsa8bub.css';
import '../../css/a/a8jgx4b9e.css';
import '../../css/x/xw8v0ibsm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfnsa8bub"/><path class="a8jgx4b9e"/><path class="xw8v0ibsm"/>`,
		"fallback": "energy-icons:charging-canopy-20-bold",
	});
}

export default Component;
