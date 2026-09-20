import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x68ivjbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x68ivjbzt"/>`,
		"fallback": "stash:arrow-retry-light",
	});
}

export default Component;
