import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjpbn_mym.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjpbn_mym"/>`,
		"fallback": "glyphs:flag-1",
	});
}

export default Component;
