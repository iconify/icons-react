import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fnaudbb4k.css';
import '../../css/r/ro_s5ibre.css';
import '../../css/g/gq5h8r63u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fnaudbb4k"/><path class="ro_s5ibre"/><path class="gq5h8r63u"/></g>`,
		"fallback": "icon-park:diving",
	});
}

export default Component;
