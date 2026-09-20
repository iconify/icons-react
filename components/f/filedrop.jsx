import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm76dsbzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm76dsbzw"/>`,
		"fallback": "selfhst:filedrop",
	});
}

export default Component;
