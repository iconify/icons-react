import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cawkv0b7y.css';
import '../../css/a/afip66uhs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cawkv0b7y"/><path class="afip66uhs"/></g>`,
		"fallback": "glyphs:inbox-bold",
	});
}

export default Component;
