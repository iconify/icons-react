import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6zsw8m6s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6zsw8m6s"/>`,
		"fallback": "teenyicons:google-ad-outline",
	});
}

export default Component;
