import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s11qicbzo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s11qicbzo"/>`,
		"fallback": "si-glyph:bolt",
	});
}

export default Component;
