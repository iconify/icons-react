import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9zishbhy.css';
import '../../css/j/j344wacyx.css';
import '../../css/c/cti30rbcu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9zishbhy"/><path class="j344wacyx"/><path class="cti30rbcu"/>`,
		"fallback": "energy-icons:eye-dropper-20",
	});
}

export default Component;
