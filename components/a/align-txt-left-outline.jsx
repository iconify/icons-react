import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaozv3mzs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaozv3mzs"/>`,
		"fallback": "lsicon:align-txt-left-outline",
	});
}

export default Component;
