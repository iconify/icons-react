import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj2raobmg.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj2raobmg"/>`,
		"fallback": "si-glyph:corkscrew",
	});
}

export default Component;
