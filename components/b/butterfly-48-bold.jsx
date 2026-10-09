import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkze5mbgn.css';
import '../../css/v/vkaih402o.css';
import '../../css/w/wqgk4rban.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkze5mbgn"/><path class="vkaih402o"/><path class="wqgk4rban"/>`,
		"fallback": "energy-icons:butterfly-48-bold",
	});
}

export default Component;
