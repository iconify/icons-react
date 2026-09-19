import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljt949bjd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljt949bjd"/>`,
		"fallback": "si-glyph:contrast",
	});
}

export default Component;
