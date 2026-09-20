import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwtm-ib9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwtm-ib9b"/>`,
		"fallback": "stash:angle-right",
	});
}

export default Component;
