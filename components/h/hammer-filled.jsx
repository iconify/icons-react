import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek9xd-8cz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek9xd-8cz"/>`,
		"fallback": "dinkie-icons:hammer-filled",
	});
}

export default Component;
