import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezekt3baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezekt3baf"/>`,
		"fallback": "tabler:bleach-off",
	});
}

export default Component;
