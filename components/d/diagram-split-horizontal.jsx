import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/r/rf6qy1bai.css';
import '../../css/h/hsg9le06j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="rf6qy1bai"/><path class="hsg9le06j"/></g>`,
		"fallback": "streamline-ultimate-color:diagram-split-horizontal",
	});
}

export default Component;
