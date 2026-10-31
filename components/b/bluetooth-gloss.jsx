import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6emu6ghc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6emu6ghc"/>`,
		"fallback": "withicons:bluetooth-gloss",
	});
}

export default Component;
