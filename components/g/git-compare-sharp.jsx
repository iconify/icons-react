import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukd2hu43u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukd2hu43u"/>`,
		"fallback": "keyline-icons:git-compare-sharp",
	});
}

export default Component;
