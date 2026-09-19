import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4dm_8boq.css';
import '../../css/s/swzjqgj-x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4dm_8boq"/><circle class="swzjqgj-x"/>`,
		"fallback": "garden:alert-warning-stroke-12",
	});
}

export default Component;
