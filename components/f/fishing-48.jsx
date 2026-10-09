import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id1bkk3ua.css';
import '../../css/g/g4zjvqbmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id1bkk3ua"/><path class="g4zjvqbmi"/>`,
		"fallback": "energy-icons:fishing-48",
	});
}

export default Component;
