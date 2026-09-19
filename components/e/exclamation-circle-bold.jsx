import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3yj_uvhq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r3yj_uvhq"/>`,
		"fallback": "glyphs:exclamation-circle-bold",
	});
}

export default Component;
