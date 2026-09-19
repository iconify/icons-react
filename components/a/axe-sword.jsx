import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm15w3b5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm15w3b5g"/>`,
		"fallback": "game-icons:axe-sword",
	});
}

export default Component;
