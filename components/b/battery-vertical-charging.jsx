import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq9c2zbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jq9c2zbvz"/>`,
		"fallback": "griddy-icons:battery-vertical-charging",
	});
}

export default Component;
