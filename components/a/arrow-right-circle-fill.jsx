import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xisg-gb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xisg-gb0k"/>`,
		"fallback": "ri:arrow-right-circle-fill",
	});
}

export default Component;
