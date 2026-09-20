import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti44kjihb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti44kjihb"/>`,
		"fallback": "octicon:feed-forked-16",
	});
}

export default Component;
