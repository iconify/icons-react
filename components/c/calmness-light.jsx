import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drveqac9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drveqac9x"/>`,
		"fallback": "selfhst:calmness-light",
	});
}

export default Component;
