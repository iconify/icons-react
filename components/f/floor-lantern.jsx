import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwogb9bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwogb9bwd"/>`,
		"fallback": "cbi:floor-lantern",
	});
}

export default Component;
