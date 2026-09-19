import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiz7q4bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiz7q4bta"/>`,
		"fallback": "griddy-icons:chevron-right-small-filled",
	});
}

export default Component;
