import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/y/y2_5hqbua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="y2_5hqbua"/>`,
		"fallback": "energy-icons:file-chart-48",
	});
}

export default Component;
