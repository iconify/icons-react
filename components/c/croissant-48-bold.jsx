import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d98iimw6f.css';
import '../../css/j/j9vmdbqgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d98iimw6f"/><path class="j9vmdbqgp"/>`,
		"fallback": "energy-icons:croissant-48-bold",
	});
}

export default Component;
