import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7cvghjjq.css';
import '../../css/x/x9yd_cc7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7cvghjjq"/><path clip-rule="evenodd" class="x9yd_cc7v"/>`,
		"fallback": "qlementine-icons:id-card-16",
	});
}

export default Component;
