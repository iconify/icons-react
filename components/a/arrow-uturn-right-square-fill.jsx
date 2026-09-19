import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwqcf3zac.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwqcf3zac"/>`,
		"fallback": "f7:arrow-uturn-right-square-fill",
	});
}

export default Component;
