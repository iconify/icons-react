import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mntwwlban.css';
import '../../css/r/rb7nm4b1k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="mntwwlban"/><path class="rb7nm4b1k"/></g>`,
		"fallback": "thesvg-color:documenso-light",
	});
}

export default Component;
