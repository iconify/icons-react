import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ammq8ggrp.css';
import '../../css/n/nss1utbbu.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ammq8ggrp"/><path class="nss1utbbu"/>`,
		"fallback": "maki:farm-11",
	});
}

export default Component;
