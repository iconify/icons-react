import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i817_ebjw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i817_ebjw"/>`,
		"fallback": "lsicon:align-txt-center-outline",
	});
}

export default Component;
