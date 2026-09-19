import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw-joebek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw-joebek"/>`,
		"fallback": "si-glyph:database-share",
	});
}

export default Component;
