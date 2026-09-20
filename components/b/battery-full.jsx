import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjcox5b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjcox5b5w"/>`,
		"fallback": "keyline-icons:battery-full",
	});
}

export default Component;
