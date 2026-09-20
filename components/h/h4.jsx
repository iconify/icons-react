import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/virf4bbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="virf4bbaz"/>`,
		"fallback": "sidekickicons:h4",
	});
}

export default Component;
