import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtki5oofd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtki5oofd"/>`,
		"fallback": "ri:feedback-line",
	});
}

export default Component;
