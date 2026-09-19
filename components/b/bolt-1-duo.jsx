import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2357wbmn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2357wbmn"/>`,
		"fallback": "glyphs:bolt-1-duo",
	});
}

export default Component;
