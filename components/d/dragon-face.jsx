import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m66b2hgdq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m66b2hgdq"/>`,
		"fallback": "dinkie-icons:dragon-face",
	});
}

export default Component;
