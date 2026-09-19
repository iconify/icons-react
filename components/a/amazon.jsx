import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg8exbb1t.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg8exbb1t"/>`,
		"fallback": "fontisto:amazon",
	});
}

export default Component;
