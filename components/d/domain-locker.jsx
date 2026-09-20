import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgkrg8bvl.css';
import '../../css/r/r1m3whbhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgkrg8bvl"/><path class="r1m3whbhg"/>`,
		"fallback": "selfhst:domain-locker",
	});
}

export default Component;
