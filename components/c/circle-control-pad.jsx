import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reu1yxf8u.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="reu1yxf8u"/>`,
		"fallback": "si-glyph:circle-control-pad",
	});
}

export default Component;
