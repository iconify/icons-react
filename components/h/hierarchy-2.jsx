import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9xaj9h1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9xaj9h1e"/>`,
		"fallback": "tabler:hierarchy-2",
	});
}

export default Component;
