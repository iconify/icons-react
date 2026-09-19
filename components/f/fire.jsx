import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp-nd7g4j.css';

const viewBox = {"width":424,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp-nd7g4j"/>`,
		"fallback": "ps:fire",
	});
}

export default Component;
