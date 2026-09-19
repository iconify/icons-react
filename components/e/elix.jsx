import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu15qfa1m.css';
import '../../css/j/j0smd1g0j.css';
import '../../css/w/wsm6lx-8z.css';
import '../../css/p/piv5izbzd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu15qfa1m"/><path class="j0smd1g0j"/><path class="wsm6lx-8z"/><path class="piv5izbzd"/>`,
		"fallback": "cryptocurrency:elix",
	});
}

export default Component;
