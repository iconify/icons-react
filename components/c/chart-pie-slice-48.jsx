import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc42tcp8f.css';
import '../../css/q/qol5o9b3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc42tcp8f"/><path class="qol5o9b3i"/>`,
		"fallback": "energy-icons:chart-pie-slice-48",
	});
}

export default Component;
