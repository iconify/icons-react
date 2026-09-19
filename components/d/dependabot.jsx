import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5yqucbgl.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5yqucbgl"/>`,
		"fallback": "file-icons:dependabot",
	});
}

export default Component;
