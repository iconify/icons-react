import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmr94yb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmr94yb5x"/>`,
		"fallback": "token:ada",
	});
}

export default Component;
