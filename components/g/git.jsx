import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fft4c3dqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fft4c3dqg"/>`,
		"fallback": "humbleicons:git",
	});
}

export default Component;
