import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svl07cy6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svl07cy6k"/>`,
		"fallback": "sidekickicons:chevron-right-left-solid",
	});
}

export default Component;
