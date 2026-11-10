import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqytxs1ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqytxs1ph"/>`,
		"fallback": "tabler:heart-key",
	});
}

export default Component;
