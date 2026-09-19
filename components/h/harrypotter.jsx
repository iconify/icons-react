import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxggr_brq.css';

const viewBox = {"width":1025,"height":886};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxggr_brq"/>`,
		"fallback": "whh:harrypotter",
	});
}

export default Component;
