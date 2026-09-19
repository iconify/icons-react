import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbe5bub9z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbe5bub9z"/>`,
		"fallback": "dinkie-icons:bell-filled",
	});
}

export default Component;
