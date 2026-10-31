import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iua0b4tie.css';
import '../../css/d/dndy5ccgm.css';
import '../../css/q/q1uumkb4y.css';
import '../../css/r/rcyotpv1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="iua0b4tie wm-shadow"/><path class="dndy5ccgm wm-shadow"/><path class="q1uumkb4y"/><path class="rcyotpv1e"/></g>`,
		"fallback": "withicons-brutal:airplay",
	});
}

export default Component;
