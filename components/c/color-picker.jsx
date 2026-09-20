import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvwij9-lc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvwij9-lc"/>`,
		"fallback": "streamline:color-picker",
	});
}

export default Component;
