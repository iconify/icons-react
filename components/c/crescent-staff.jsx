import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pag-9sbbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pag-9sbbe"/>`,
		"fallback": "game-icons:crescent-staff",
	});
}

export default Component;
