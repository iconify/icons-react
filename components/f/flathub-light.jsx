import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw9vr5bmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw9vr5bmz"/>`,
		"fallback": "selfhst:flathub-light",
	});
}

export default Component;
