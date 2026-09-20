import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix090bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix090bwe"/>`,
		"fallback": "ri:drizzle-fill",
	});
}

export default Component;
