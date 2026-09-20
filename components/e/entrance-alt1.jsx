import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npth3jbkr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npth3jbkr"/>`,
		"fallback": "maki:entrance-alt1",
	});
}

export default Component;
