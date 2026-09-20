import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm7o4nb8g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pm7o4nb8g"/>`,
		"fallback": "streamline:expand-horizontal-1-solid",
	});
}

export default Component;
