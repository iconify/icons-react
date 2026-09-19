import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cytbo59vc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cytbo59vc"/>`,
		"fallback": "game-icons:arrow-cluster",
	});
}

export default Component;
