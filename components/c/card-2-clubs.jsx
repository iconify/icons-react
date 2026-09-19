import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eray_ub-o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eray_ub-o"/>`,
		"fallback": "game-icons:card-2-clubs",
	});
}

export default Component;
