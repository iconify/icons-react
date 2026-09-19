import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8iz40ljm.css';
import '../../css/d/dit6uybka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8iz40ljm"/><path class="dit6uybka"/>`,
		"fallback": "famicons:bulb-outline",
	});
}

export default Component;
