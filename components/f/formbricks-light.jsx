import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxqz76bud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxqz76bud"/>`,
		"fallback": "selfhst:formbricks-light",
	});
}

export default Component;
