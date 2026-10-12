import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhh5q_bxg.css';
import '../../css/i/il5efkf8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhh5q_bxg"/><path class="il5efkf8u"/>`,
		"fallback": "energy-icons:control-panel-48",
	});
}

export default Component;
