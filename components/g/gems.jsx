import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l14xrabiq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l14xrabiq"/>`,
		"fallback": "game-icons:gems",
	});
}

export default Component;
