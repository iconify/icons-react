import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouuz4eb6w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouuz4eb6w"/>`,
		"fallback": "streamline:anchor",
	});
}

export default Component;
