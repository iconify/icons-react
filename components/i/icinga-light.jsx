import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1-_00qzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1-_00qzy"/>`,
		"fallback": "selfhst:icinga-light",
	});
}

export default Component;
