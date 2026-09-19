import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw-bh2b7p.css';
import '../../css/r/rmwwi5nky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw-bh2b7p"/><path class="rmwwi5nky"/>`,
		"fallback": "bxs:cat",
	});
}

export default Component;
