import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgjnejr0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgjnejr0c"/>`,
		"fallback": "tabler:border-corner-ios",
	});
}

export default Component;
