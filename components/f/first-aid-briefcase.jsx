import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2msgnz-p.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2msgnz-p"/>`,
		"fallback": "si-glyph:first-aid-briefcase",
	});
}

export default Component;
