import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvuish48u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvuish48u"/>`,
		"fallback": "fa6-regular:face-laugh-squint",
	});
}

export default Component;
