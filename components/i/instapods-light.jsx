import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk1zdgbuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk1zdgbuf"/>`,
		"fallback": "selfhst:instapods-light",
	});
}

export default Component;
