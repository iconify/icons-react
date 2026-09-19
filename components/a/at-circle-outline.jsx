import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv7rk0b4n.css';
import '../../css/i/icd23tbey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv7rk0b4n"/><path class="icd23tbey"/>`,
		"fallback": "ion:at-circle-outline",
	});
}

export default Component;
