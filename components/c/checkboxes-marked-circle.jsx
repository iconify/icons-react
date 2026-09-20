import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nskwcxbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nskwcxbed"/>`,
		"fallback": "mdi:checkboxes-marked-circle",
	});
}

export default Component;
