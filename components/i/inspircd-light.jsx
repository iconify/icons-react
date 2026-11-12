import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aspqoieyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aspqoieyb"/>`,
		"fallback": "selfhst:inspircd-light",
	});
}

export default Component;
