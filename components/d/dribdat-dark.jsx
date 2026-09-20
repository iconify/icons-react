import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah7r5tboe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah7r5tboe"/>`,
		"fallback": "selfhst:dribdat-dark",
	});
}

export default Component;
