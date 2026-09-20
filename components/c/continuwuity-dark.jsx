import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrh5_9blm.css';
import '../../css/s/s4f0-m1sd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrh5_9blm"/><path class="s4f0-m1sd"/>`,
		"fallback": "selfhst:continuwuity-dark",
	});
}

export default Component;
