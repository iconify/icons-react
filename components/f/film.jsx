import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0t9246lm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0t9246lm"/>`,
		"fallback": "flat-color-icons:film",
	});
}

export default Component;
