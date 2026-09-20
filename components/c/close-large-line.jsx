import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq9jq0-sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq9jq0-sy"/>`,
		"fallback": "ri:close-large-line",
	});
}

export default Component;
