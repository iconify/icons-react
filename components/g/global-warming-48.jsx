import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmj85obju.css';
import '../../css/o/oj51yuuri.css';
import '../../css/d/dede64x5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmj85obju"/><path class="oj51yuuri"/><path class="dede64x5j"/>`,
		"fallback": "energy-icons:global-warming-48",
	});
}

export default Component;
