import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v81fy1bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v81fy1bes"/>`,
		"fallback": "thesvg-color:antv",
	});
}

export default Component;
