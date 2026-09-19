import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as_hcbb4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as_hcbb4f"/>`,
		"fallback": "game-icons:horus",
	});
}

export default Component;
