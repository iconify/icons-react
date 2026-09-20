import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlv0inh3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlv0inh3t"/>`,
		"fallback": "tabler:bookmark-ai",
	});
}

export default Component;
