import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8psnb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8psnb7g"/>`,
		"fallback": "ri:ghost-2-fill",
	});
}

export default Component;
