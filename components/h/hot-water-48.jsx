import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux4uf3b8j.css';
import '../../css/j/jyjbrnbyy.css';
import '../../css/k/ksb4xc21f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux4uf3b8j"/><path class="jyjbrnbyy"/><path class="ksb4xc21f"/>`,
		"fallback": "energy-icons:hot-water-48",
	});
}

export default Component;
