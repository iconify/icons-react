import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xby4ho1hz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xby4ho1hz"/>`,
		"fallback": "gravity-ui:arrow-rotate-right-number-5",
	});
}

export default Component;
