import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln6cmdy5n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln6cmdy5n"/>`,
		"fallback": "streamline:blank-calendar-remix",
	});
}

export default Component;
