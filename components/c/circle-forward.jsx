import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nta6gac4g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nta6gac4g"/>`,
		"fallback": "si-glyph:circle-forward",
	});
}

export default Component;
