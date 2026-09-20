import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aapi2lbzr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aapi2lbzr"/>`,
		"fallback": "octicon:gear-16",
	});
}

export default Component;
