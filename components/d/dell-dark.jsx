import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlcmmrb_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlcmmrb_p"/>`,
		"fallback": "selfhst:dell-dark",
	});
}

export default Component;
