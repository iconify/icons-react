import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bud6u-kad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bud6u-kad"/>`,
		"fallback": "lets-icons:arrow-alt-ltop-alt",
	});
}

export default Component;
