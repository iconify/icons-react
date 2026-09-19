import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u893fxc0k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u893fxc0k"/>`,
		"fallback": "dinkie-icons:graduation-cap",
	});
}

export default Component;
