import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emduyp3ad.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emduyp3ad"/>`,
		"fallback": "si-glyph:christmass-hat",
	});
}

export default Component;
