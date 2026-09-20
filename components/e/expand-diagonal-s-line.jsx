import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn2s-smaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn2s-smaj"/>`,
		"fallback": "ri:expand-diagonal-s-line",
	});
}

export default Component;
