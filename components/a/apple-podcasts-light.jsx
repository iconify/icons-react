import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc4m0ib3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc4m0ib3m"/>`,
		"fallback": "selfhst:apple-podcasts-light",
	});
}

export default Component;
