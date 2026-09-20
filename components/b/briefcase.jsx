import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj5h39unz.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj5h39unz"/>`,
		"fallback": "octicon:briefcase",
	});
}

export default Component;
