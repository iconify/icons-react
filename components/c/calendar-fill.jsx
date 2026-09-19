import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ony59q43f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ony59q43f"/>`,
		"fallback": "eva:calendar-fill",
	});
}

export default Component;
