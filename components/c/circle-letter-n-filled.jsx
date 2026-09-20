import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1b637mci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1b637mci"/>`,
		"fallback": "tabler:circle-letter-n-filled",
	});
}

export default Component;
