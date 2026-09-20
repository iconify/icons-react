import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2f7h7_xh.css';
import '../../css/j/jbyel523s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2f7h7_xh"/><path clip-rule="evenodd" class="jbyel523s"/>`,
		"fallback": "nrk:gallery",
	});
}

export default Component;
