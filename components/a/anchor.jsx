import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqm0ns9os.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqm0ns9os"/>`,
		"fallback": "si-glyph:anchor",
	});
}

export default Component;
