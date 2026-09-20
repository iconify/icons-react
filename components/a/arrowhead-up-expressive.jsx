import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scn4tpb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scn4tpb_s"/>`,
		"fallback": "nrk:arrowhead-up-expressive",
	});
}

export default Component;
