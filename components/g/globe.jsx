import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpryfp0ky.css';
import '../../css/o/omiz2rshg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpryfp0ky"/><path class="omiz2rshg"/>`,
		"fallback": "flat-color-icons:globe",
	});
}

export default Component;
