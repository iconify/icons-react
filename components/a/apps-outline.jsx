import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr368eb4g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr368eb4g"/>`,
		"fallback": "lsicon:apps-outline",
	});
}

export default Component;
