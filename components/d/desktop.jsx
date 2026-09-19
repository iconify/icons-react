import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkzaq9b2o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkzaq9b2o"/>`,
		"fallback": "si-glyph:desktop",
	});
}

export default Component;
