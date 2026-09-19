import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf2sa2bjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf2sa2bjg"/>`,
		"fallback": "flat-color-icons:expand",
	});
}

export default Component;
