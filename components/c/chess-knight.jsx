import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kup6yv64e.css';
import '../../css/v/v6kzd0nbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kup6yv64e"/><path class="v6kzd0nbv"/></g>`,
		"fallback": "streamline-sharp:chess-knight",
	});
}

export default Component;
