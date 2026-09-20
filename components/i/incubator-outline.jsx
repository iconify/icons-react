import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lay54-b5y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lay54-b5y"/>`,
		"fallback": "lsicon:incubator-outline",
	});
}

export default Component;
