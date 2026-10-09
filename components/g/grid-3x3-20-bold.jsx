import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivpnqg4j.css';
import '../../css/l/layzn__cg.css';
import '../../css/k/keyr8hhna.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivpnqg4j"/><path class="layzn__cg"/><path class="keyr8hhna"/>`,
		"fallback": "energy-icons:grid-3x3-20-bold",
	});
}

export default Component;
