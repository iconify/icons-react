import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lctqtk5pp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lctqtk5pp"/>`,
		"fallback": "si-glyph:code",
	});
}

export default Component;
