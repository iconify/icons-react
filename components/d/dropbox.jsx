import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swzqjaccb.css';

const viewBox = {"width":682,"height":694};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swzqjaccb"/>`,
		"fallback": "ls:dropbox",
	});
}

export default Component;
