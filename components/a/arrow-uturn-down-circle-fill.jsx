import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh8p9kf-t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh8p9kf-t"/>`,
		"fallback": "f7:arrow-uturn-down-circle-fill",
	});
}

export default Component;
