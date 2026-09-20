import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6l40s97s.css';
import '../../css/l/l08ti_b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6l40s97s"/><path clip-rule="evenodd" class="l08ti_b-g"/>`,
		"fallback": "lineicons:ambulance-1",
	});
}

export default Component;
