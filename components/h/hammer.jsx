import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbiwg9rpr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbiwg9rpr"/>`,
		"fallback": "dinkie-icons:hammer",
	});
}

export default Component;
