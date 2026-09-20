import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2f-szb8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2f-szb8a"/>`,
		"fallback": "selfhst:beaver-habit-tracker-dark",
	});
}

export default Component;
