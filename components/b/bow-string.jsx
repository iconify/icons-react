import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9q-umbzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9q-umbzq"/>`,
		"fallback": "game-icons:bow-string",
	});
}

export default Component;
