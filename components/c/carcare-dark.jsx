import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgxsjub5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgxsjub5m"/>`,
		"fallback": "selfhst:carcare-dark",
	});
}

export default Component;
