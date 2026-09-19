import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl_di5buv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl_di5buv"/>`,
		"fallback": "glyphs:check-double",
	});
}

export default Component;
