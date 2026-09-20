import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1oqzbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qw1oqzbhg"/>`,
		"fallback": "streamline-ultimate:chemical-hexagon-1-bold",
	});
}

export default Component;
