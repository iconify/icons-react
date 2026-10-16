import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql7wfvbqt.css';
import '../../css/v/vv3xjkaxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql7wfvbqt"/><path class="vv3xjkaxa"/>`,
		"fallback": "energy-icons:axe-48-bold",
	});
}

export default Component;
