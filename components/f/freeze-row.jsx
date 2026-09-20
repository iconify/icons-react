import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u96y3zbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u96y3zbfy"/>`,
		"fallback": "tabler:freeze-row",
	});
}

export default Component;
