import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xptlr6bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xptlr6bhu"/>`,
		"fallback": "griddy-icons:halloween-candy-filled",
	});
}

export default Component;
