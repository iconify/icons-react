import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf81sm_hr.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf81sm_hr"/>`,
		"fallback": "si-glyph:connect-2",
	});
}

export default Component;
