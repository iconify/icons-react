import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmu-53b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmu-53b9w"/>`,
		"fallback": "selfhst:dub-light",
	});
}

export default Component;
