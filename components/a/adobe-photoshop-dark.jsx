import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_jd-0b7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_jd-0b7w"/>`,
		"fallback": "selfhst:adobe-photoshop-dark",
	});
}

export default Component;
