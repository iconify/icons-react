import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5i58z2mb.css';
import '../../css/m/mi4i07bgh.css';
import '../../css/j/jat07cb-u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5i58z2mb"/><path class="mi4i07bgh"/><path class="jat07cb-u"/>`,
		"fallback": "energy-icons:elderly-20",
	});
}

export default Component;
