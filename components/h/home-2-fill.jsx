import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9lgcu2_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9lgcu2_p"/>`,
		"fallback": "ri:home-2-fill",
	});
}

export default Component;
