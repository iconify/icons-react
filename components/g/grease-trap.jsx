import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnzx4rv0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnzx4rv0w"/>`,
		"fallback": "game-icons:grease-trap",
	});
}

export default Component;
