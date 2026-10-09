import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liyswgvjl.css';
import '../../css/o/or_bkw-qe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liyswgvjl"/><path class="or_bkw-qe"/>`,
		"fallback": "energy-icons:corner-right-up-48-bold",
	});
}

export default Component;
