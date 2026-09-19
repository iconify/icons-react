import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlm1qqb-a.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlm1qqb-a"/>`,
		"fallback": "si-glyph:dice-2",
	});
}

export default Component;
