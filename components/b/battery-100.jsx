import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8k9ylbgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8k9ylbgo"/>`,
		"fallback": "game-icons:battery-100",
	});
}

export default Component;
