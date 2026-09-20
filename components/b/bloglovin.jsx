import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q--0yixso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q--0yixso"/>`,
		"fallback": "thesvg-color:bloglovin",
	});
}

export default Component;
