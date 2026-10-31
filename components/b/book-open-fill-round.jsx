import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lenp-1-db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lenp-1-db"/>`,
		"fallback": "coolicons:book-open-fill-round",
	});
}

export default Component;
