import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb8-3blsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hb8-3blsk"/>`,
		"fallback": "griddy-icons:edit-off",
	});
}

export default Component;
