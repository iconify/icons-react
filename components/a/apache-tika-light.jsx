import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adiyfh9-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adiyfh9-e"/>`,
		"fallback": "selfhst:apache-tika-light",
	});
}

export default Component;
