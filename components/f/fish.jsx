import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vypq5rbew.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vypq5rbew"/>`,
		"fallback": "si-glyph:fish",
	});
}

export default Component;
