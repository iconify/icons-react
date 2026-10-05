import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmiss0b9h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmiss0b9h"/>`,
		"fallback": "pinhead:badge-shield-with-wifi",
	});
}

export default Component;
