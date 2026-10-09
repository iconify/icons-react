import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndoo8eizj.css';
import '../../css/h/h7ne39bmg.css';
import '../../css/z/z0k_6w9gl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndoo8eizj"/><path class="h7ne39bmg"/><path class="z0k_6w9gl"/>`,
		"fallback": "energy-icons:ammeter-48",
	});
}

export default Component;
