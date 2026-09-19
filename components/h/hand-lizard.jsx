import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izgbh1b6s.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izgbh1b6s"/>`,
		"fallback": "fa-regular:hand-lizard",
	});
}

export default Component;
