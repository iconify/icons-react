import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji5eo813c.css';
import '../../css/n/nkjssnbsa.css';
import '../../css/t/t46b2zber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ji5eo813c"/><path class="nkjssnbsa"/><path class="t46b2zber"/></g>`,
		"fallback": "evicons:app-charging",
	});
}

export default Component;
