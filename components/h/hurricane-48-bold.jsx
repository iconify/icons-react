import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbfpednqz.css';
import '../../css/u/ug_ur2bmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbfpednqz"/><path class="ug_ur2bmt"/>`,
		"fallback": "energy-icons:hurricane-48-bold",
	});
}

export default Component;
