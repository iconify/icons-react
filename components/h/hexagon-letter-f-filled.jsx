import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1ggj4blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1ggj4blw"/>`,
		"fallback": "tabler:hexagon-letter-f-filled",
	});
}

export default Component;
