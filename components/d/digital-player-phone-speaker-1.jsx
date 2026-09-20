import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k0t9i_b0d.css';
import '../../css/g/gk5k1jscl.css';
import '../../css/h/hxczxmvle.css';
import '../../css/y/y_0-tfzwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k0t9i_b0d"/><path class="gk5k1jscl"/><path class="hxczxmvle"/><path class="y_0-tfzwl"/></g>`,
		"fallback": "streamline-freehand:digital-player-phone-speaker-1",
	});
}

export default Component;
