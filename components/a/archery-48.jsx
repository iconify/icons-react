import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mez3sq6az.css';
import '../../css/f/f5mgz9qau.css';
import '../../css/i/in0d74b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mez3sq6az"/><path class="f5mgz9qau"/><path class="in0d74b0s"/>`,
		"fallback": "energy-icons:archery-48",
	});
}

export default Component;
