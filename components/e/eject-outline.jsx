import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w2mtso-sv.css';
import '../../css/y/y9fv70gpn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w2mtso-sv"/><path class="y9fv70gpn"/></g>`,
		"fallback": "glyphs:eject-outline",
	});
}

export default Component;
