import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bok3snb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bok3snb3b"/>`,
		"fallback": "ri:dv-line",
	});
}

export default Component;
