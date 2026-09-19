import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr_oih2cb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr_oih2cb"/>`,
		"fallback": "si-glyph:adjustment-horizon",
	});
}

export default Component;
