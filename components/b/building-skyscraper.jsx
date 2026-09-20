import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wttt595uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wttt595uw"/>`,
		"fallback": "tabler:building-skyscraper",
	});
}

export default Component;
