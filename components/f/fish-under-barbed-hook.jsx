import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7cbi6b2p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7cbi6b2p"/>`,
		"fallback": "pinhead:fish-under-barbed-hook",
	});
}

export default Component;
