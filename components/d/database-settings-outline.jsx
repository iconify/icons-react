import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0pk_lb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0pk_lb3w"/>`,
		"fallback": "mdi:database-settings-outline",
	});
}

export default Component;
