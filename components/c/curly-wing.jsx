import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he2e8je9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he2e8je9w"/>`,
		"fallback": "game-icons:curly-wing",
	});
}

export default Component;
