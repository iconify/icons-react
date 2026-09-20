import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni8m26bmv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni8m26bmv"/>`,
		"fallback": "octicon:bell-fill-16",
	});
}

export default Component;
