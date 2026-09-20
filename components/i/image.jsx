import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dmurzzbgy.css';
import '../../css/j/jnv7zfyyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dmurzzbgy"/><path class="jnv7zfyyv"/></g>`,
		"fallback": "reicon:image",
	});
}

export default Component;
