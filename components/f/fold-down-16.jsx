import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w05rj732j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w05rj732j"/>`,
		"fallback": "octicon:fold-down-16",
	});
}

export default Component;
