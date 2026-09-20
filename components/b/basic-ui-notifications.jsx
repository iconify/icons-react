import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xota8vqjr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xota8vqjr"/>`,
		"fallback": "streamline-block:basic-ui-notifications",
	});
}

export default Component;
