import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzk05gb5l.css';
import '../../css/d/d86a3vbmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzk05gb5l"/><path class="d86a3vbmu"/>`,
		"fallback": "selfhst:connectwise-screenconnect",
	});
}

export default Component;
