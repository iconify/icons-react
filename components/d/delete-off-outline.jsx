import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijozerb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijozerb5f"/>`,
		"fallback": "mdi:delete-off-outline",
	});
}

export default Component;
