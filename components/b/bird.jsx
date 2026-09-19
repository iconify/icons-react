import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcayocc6c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcayocc6c"/>`,
		"fallback": "dinkie-icons:bird",
	});
}

export default Component;
