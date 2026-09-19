import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj4wi1bgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj4wi1bgc"/>`,
		"fallback": "famicons:call-outline",
	});
}

export default Component;
