import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb49_cy3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb49_cy3h"/>`,
		"fallback": "withicons:cherry-gloss",
	});
}

export default Component;
