import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phflicz3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phflicz3p"/>`,
		"fallback": "ri:android-line",
	});
}

export default Component;
