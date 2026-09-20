import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lux-p9t9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lux-p9t9f"/>`,
		"fallback": "selfhst:giraffile",
	});
}

export default Component;
