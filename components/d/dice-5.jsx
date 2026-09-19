import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlrw7obei.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlrw7obei"/>`,
		"fallback": "si-glyph:dice-5",
	});
}

export default Component;
