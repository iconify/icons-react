import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u1x-e7bql.css';
import '../../css/j/jdg3xy5_p.css';
import '../../css/l/le4gxtbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="u1x-e7bql"/><path class="jdg3xy5_p"/><path class="le4gxtbee"/></g>`,
		"fallback": "lets-icons:arhive-alt-small-lock",
	});
}

export default Component;
