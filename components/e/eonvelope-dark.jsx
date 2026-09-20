import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taqcn9bfg.css';
import '../../css/c/cijv3ebdv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taqcn9bfg"/><path class="cijv3ebdv"/>`,
		"fallback": "selfhst:eonvelope-dark",
	});
}

export default Component;
