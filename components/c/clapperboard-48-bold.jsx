import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7c_5vb9e.css';
import '../../css/m/mqkco8bnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7c_5vb9e"/><path class="mqkco8bnf"/>`,
		"fallback": "energy-icons:clapperboard-48-bold",
	});
}

export default Component;
