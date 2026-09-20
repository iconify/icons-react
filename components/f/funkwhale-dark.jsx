import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-f5cn18w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-f5cn18w"/>`,
		"fallback": "selfhst:funkwhale-dark",
	});
}

export default Component;
