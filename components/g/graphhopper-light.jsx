import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz1dr9udw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz1dr9udw"/>`,
		"fallback": "selfhst:graphhopper-light",
	});
}

export default Component;
