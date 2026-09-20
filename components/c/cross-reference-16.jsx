import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx2z66weu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx2z66weu"/>`,
		"fallback": "octicon:cross-reference-16",
	});
}

export default Component;
