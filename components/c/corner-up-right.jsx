import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bul6qpb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bul6qpb5m"/>`,
		"fallback": "tabler:corner-up-right",
	});
}

export default Component;
