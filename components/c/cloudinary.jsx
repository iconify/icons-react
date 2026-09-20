import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvq-k4bzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvq-k4bzy"/>`,
		"fallback": "selfhst:cloudinary",
	});
}

export default Component;
