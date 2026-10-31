import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s8iix90tg.css';
import '../../css/t/twsdh9bcf.css';
import '../../css/f/fn9fj5b4u.css';
import '../../css/y/yryqpsi8c.css';
import '../../css/x/x4niebq2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s8iix90tg wm-shadow"/><path class="twsdh9bcf wm-shadow"/><path class="fn9fj5b4u"/><path class="yryqpsi8c"/><path class="wm-s x4niebq2n"/></g>`,
		"fallback": "withicons-brutal:filter-x",
	});
}

export default Component;
