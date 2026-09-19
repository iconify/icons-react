import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-2-3xob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb-2-3xob"/>`,
		"fallback": "game-icons:capricorn",
	});
}

export default Component;
