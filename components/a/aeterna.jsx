import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml2r52dge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml2r52dge"/>`,
		"fallback": "selfhst:aeterna",
	});
}

export default Component;
