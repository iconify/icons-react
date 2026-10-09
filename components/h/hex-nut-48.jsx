import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f77e97noo.css';
import '../../css/c/cmhnqibcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f77e97noo"/><path class="cmhnqibcc"/>`,
		"fallback": "energy-icons:hex-nut-48",
	});
}

export default Component;
