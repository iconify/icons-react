import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgf-3otpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgf-3otpy"/>`,
		"fallback": "game-icons:curly-mask",
	});
}

export default Component;
