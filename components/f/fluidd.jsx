import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf_1mybtb.css';
import '../../css/r/r2pseab2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf_1mybtb"/><path class="r2pseab2n"/>`,
		"fallback": "selfhst:fluidd",
	});
}

export default Component;
