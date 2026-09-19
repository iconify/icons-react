import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8y9nwb3g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8y9nwb3g"/>`,
		"fallback": "si-glyph:arrow-move",
	});
}

export default Component;
