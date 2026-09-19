import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7gtf23ga.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7gtf23ga"/>`,
		"fallback": "si-glyph:infinity-2",
	});
}

export default Component;
