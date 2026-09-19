import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng8kr6bhu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng8kr6bhu"/>`,
		"fallback": "dinkie-icons:happy-person-raising-one-hand",
	});
}

export default Component;
