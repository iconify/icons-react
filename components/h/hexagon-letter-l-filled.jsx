import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xce-k95br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xce-k95br"/>`,
		"fallback": "tabler:hexagon-letter-l-filled",
	});
}

export default Component;
