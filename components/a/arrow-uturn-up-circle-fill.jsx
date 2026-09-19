import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3jd4cc5a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3jd4cc5a"/>`,
		"fallback": "f7:arrow-uturn-up-circle-fill",
	});
}

export default Component;
