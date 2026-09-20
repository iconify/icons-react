import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkvup1bvw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkvup1bvw"/>`,
		"fallback": "octicon:grabber-16",
	});
}

export default Component;
