import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdx0f4b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdx0f4b_l"/>`,
		"fallback": "ri:bike-line",
	});
}

export default Component;
