import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7qd3ubqx.css';
import '../../css/j/j4kecacgy.css';
import '../../css/z/ztnyhokgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7qd3ubqx"/><path class="j4kecacgy"/><path class="ztnyhokgp"/>`,
		"fallback": "energy-icons:crystal-48",
	});
}

export default Component;
