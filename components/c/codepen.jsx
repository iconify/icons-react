import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kun4g3fhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kun4g3fhx"/>`,
		"fallback": "fontisto:codepen",
	});
}

export default Component;
