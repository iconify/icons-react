import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmdh-7bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmdh-7bki"/>`,
		"fallback": "mdi:bench-back",
	});
}

export default Component;
