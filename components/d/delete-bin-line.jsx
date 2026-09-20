import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g854m9ish.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g854m9ish"/>`,
		"fallback": "ri:delete-bin-line",
	});
}

export default Component;
