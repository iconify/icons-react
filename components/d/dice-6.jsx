import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3m8nkkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs3m8nkkd"/>`,
		"fallback": "noviair:dice-6",
	});
}

export default Component;
