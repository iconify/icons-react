import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afl-tve-d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afl-tve-d"/>`,
		"fallback": "glyphs:at-duo",
	});
}

export default Component;
