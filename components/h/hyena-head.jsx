import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_im6wzha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_im6wzha"/>`,
		"fallback": "game-icons:hyena-head",
	});
}

export default Component;
