import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfym00_ax.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfym00_ax"/>`,
		"fallback": "fa6-regular:calendar-xmark",
	});
}

export default Component;
