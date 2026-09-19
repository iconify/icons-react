import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9w3u4_bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9w3u4_bj"/>`,
		"fallback": "cbi:ceiling-adore-alt-flush",
	});
}

export default Component;
