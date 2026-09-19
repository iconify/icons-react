import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf3d79iqi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf3d79iqi"/>`,
		"fallback": "dinkie-icons:cooked-rice",
	});
}

export default Component;
