import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt7ecmb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jt7ecmb5r"/>`,
		"fallback": "solar:clapperboard-edit-outline",
	});
}

export default Component;
