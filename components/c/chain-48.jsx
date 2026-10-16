import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah3zxz6rp.css';
import '../../css/h/h_kmv8b8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah3zxz6rp"/><path class="h_kmv8b8b"/>`,
		"fallback": "energy-icons:chain-48",
	});
}

export default Component;
