import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ialerhe_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ialerhe_f"/>`,
		"fallback": "iconamoon:calendar-1",
	});
}

export default Component;
