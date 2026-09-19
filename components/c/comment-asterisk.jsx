import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev--0sa9x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev--0sa9x"/>`,
		"fallback": "glyphs:comment-asterisk",
	});
}

export default Component;
