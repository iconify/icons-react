import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5_o72bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5_o72bgo"/>`,
		"fallback": "fontisto:arrow-h",
	});
}

export default Component;
