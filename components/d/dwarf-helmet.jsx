import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6qgtacpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6qgtacpq"/>`,
		"fallback": "game-icons:dwarf-helmet",
	});
}

export default Component;
