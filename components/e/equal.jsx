import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh6e5bcgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh6e5bcgb"/>`,
		"fallback": "tabler:equal",
	});
}

export default Component;
