import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw_389blb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw_389blb"/>`,
		"fallback": "selfhst:audiobookrequest-dark",
	});
}

export default Component;
