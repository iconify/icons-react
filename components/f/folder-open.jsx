import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3humqbcq.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3humqbcq"/>`,
		"fallback": "si-glyph:folder-open",
	});
}

export default Component;
