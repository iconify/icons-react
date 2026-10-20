import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cntw57bva.css';
import '../../css/q/q4ayogbqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cntw57bva"/><path class="q4ayogbqs"/>`,
		"fallback": "energy-icons:align-top-48-bold",
	});
}

export default Component;
