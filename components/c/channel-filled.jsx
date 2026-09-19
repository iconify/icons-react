import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxg65syqu.css';
import '../../css/b/b0dccwb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxg65syqu"/><path class="b0dccwb4g"/>`,
		"fallback": "bitcoin-icons:channel-filled",
	});
}

export default Component;
