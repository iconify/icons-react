import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4wo1gk8h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r4wo1gk8h"/>`,
		"fallback": "streamline:high-speed-train-front-remix",
	});
}

export default Component;
