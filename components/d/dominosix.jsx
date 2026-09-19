import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vax5f8bfr.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vax5f8bfr"/>`,
		"fallback": "whh:dominosix",
	});
}

export default Component;
