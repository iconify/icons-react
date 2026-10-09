import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0z0h0l9r.css';
import '../../css/n/n3dvw-bko.css';
import '../../css/t/tuurkcb0h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0z0h0l9r"/><path class="n3dvw-bko"/><path class="tuurkcb0h"/>`,
		"fallback": "energy-icons:cocktail-48-bold",
	});
}

export default Component;
