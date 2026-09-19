import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1o_6mbum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1o_6mbum"/>`,
		"fallback": "game-icons:back-pain",
	});
}

export default Component;
