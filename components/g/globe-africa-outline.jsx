import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0t_jjb1o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r0t_jjb1o"/>`,
		"fallback": "glyphs:globe-africa-outline",
	});
}

export default Component;
