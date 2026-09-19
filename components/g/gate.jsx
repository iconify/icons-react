import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjs9i0baf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjs9i0baf"/>`,
		"fallback": "si-glyph:gate",
	});
}

export default Component;
