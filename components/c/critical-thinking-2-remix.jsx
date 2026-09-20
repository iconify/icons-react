import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohfms5buh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ohfms5buh"/>`,
		"fallback": "streamline-flex:critical-thinking-2-remix",
	});
}

export default Component;
