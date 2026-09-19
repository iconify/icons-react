import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of5620y8a.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of5620y8a"/>`,
		"fallback": "si-glyph:candy",
	});
}

export default Component;
