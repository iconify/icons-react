import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdl7-9bot.css';
import '../../css/x/xyt0ejbjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdl7-9bot"/><path class="xyt0ejbjg"/>`,
		"fallback": "energy-icons:battery-charging-20",
	});
}

export default Component;
