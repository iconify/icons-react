import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tez2iho6w.css';
import '../../css/t/tl7-cna9n.css';
import '../../css/f/fof_1onbd.css';
import '../../css/r/rz157_w1n.css';
import '../../css/p/p2xr78bbn.css';

const viewBox = {"width":164,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tez2iho6w"/><path class="tl7-cna9n"/><path class="fof_1onbd"/><path class="rz157_w1n"/><path class="p2xr78bbn"/>`,
		"fallback": "thesvg-color:honeycomb-light",
	});
}

export default Component;
