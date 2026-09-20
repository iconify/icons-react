import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avpd09y0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avpd09y0q"/>`,
		"fallback": "selfhst:enphase-dark",
	});
}

export default Component;
