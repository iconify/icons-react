import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8kcn7bzf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8kcn7bzf"/>`,
		"fallback": "si-glyph:askterisk",
	});
}

export default Component;
