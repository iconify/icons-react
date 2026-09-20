import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlj__gane.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlj__gane"/>`,
		"fallback": "tabler:circle-letter-e-filled",
	});
}

export default Component;
