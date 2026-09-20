import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukoly_qgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukoly_qgk"/>`,
		"fallback": "ri:eye-close-line",
	});
}

export default Component;
