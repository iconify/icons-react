import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkmn36bzs.css';
import '../../css/v/vwsuc6gog.css';
import '../../css/u/u3r8q7x0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkmn36bzs"/><path class="vwsuc6gog"/><path class="u3r8q7x0u"/>`,
		"fallback": "energy-icons:borehole-20",
	});
}

export default Component;
