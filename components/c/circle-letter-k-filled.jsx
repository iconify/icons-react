import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw-90wbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw-90wbkm"/>`,
		"fallback": "tabler:circle-letter-k-filled",
	});
}

export default Component;
