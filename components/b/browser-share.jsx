import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uijg__bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uijg__bke"/>`,
		"fallback": "tabler:browser-share",
	});
}

export default Component;
