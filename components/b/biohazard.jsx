import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9rwhqbjf.css';
import '../../css/j/jlqtr1aep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9rwhqbjf"/><path class="jlqtr1aep"/>`,
		"fallback": "flat-color-icons:biohazard",
	});
}

export default Component;
