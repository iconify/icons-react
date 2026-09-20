import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrertackp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrertackp"/>`,
		"fallback": "tabler:hexagon-letter-c-filled",
	});
}

export default Component;
