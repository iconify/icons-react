import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-fwb0-yq.css';
import '../../css/t/tzluoxb1i.css';
import '../../css/x/x10q-smgs.css';
import '../../css/j/j-6y3-ujn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-fwb0-yq"/><path class="tzluoxb1i"/><path class="x10q-smgs"/><path class="j-6y3-ujn"/></g>`,
		"fallback": "tdesign:chimney",
	});
}

export default Component;
