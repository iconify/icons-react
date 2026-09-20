import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvm1ofmlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvm1ofmlp"/>`,
		"fallback": "ri:game-2-fill",
	});
}

export default Component;
