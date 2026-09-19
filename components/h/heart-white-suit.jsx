import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/latsbryka.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="latsbryka"/>`,
		"fallback": "dinkie-icons:heart-white-suit",
	});
}

export default Component;
