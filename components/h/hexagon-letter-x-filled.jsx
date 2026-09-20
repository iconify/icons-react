import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqfzzh-5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqfzzh-5g"/>`,
		"fallback": "tabler:hexagon-letter-x-filled",
	});
}

export default Component;
