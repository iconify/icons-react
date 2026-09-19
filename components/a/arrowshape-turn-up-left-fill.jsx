import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr9ujh1od.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr9ujh1od"/>`,
		"fallback": "f7:arrowshape-turn-up-left-fill",
	});
}

export default Component;
