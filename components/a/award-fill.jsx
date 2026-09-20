import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp_dbydas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp_dbydas"/>`,
		"fallback": "ri:award-fill",
	});
}

export default Component;
