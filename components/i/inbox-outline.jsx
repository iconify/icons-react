import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpqb6fb4r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpqb6fb4r"/>`,
		"fallback": "teenyicons:inbox-outline",
	});
}

export default Component;
