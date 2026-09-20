import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djoi96bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djoi96bng"/>`,
		"fallback": "mynaui:chevron-right-circle-solid",
	});
}

export default Component;
