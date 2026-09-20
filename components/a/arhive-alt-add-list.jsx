import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nf6zy_b6r.css';
import '../../css/i/ib4i6xbuw.css';
import '../../css/v/va1rmwb-p.css';
import '../../css/b/bgj5plv4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="nf6zy_b6r"/><path class="ib4i6xbuw"/><path class="va1rmwb-p"/><path class="bgj5plv4s"/></g>`,
		"fallback": "lets-icons:arhive-alt-add-list",
	});
}

export default Component;
