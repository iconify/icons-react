import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sny7_mbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sny7_mbht"/>`,
		"fallback": "ri:baseball-fill",
	});
}

export default Component;
