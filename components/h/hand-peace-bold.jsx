import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paer3lxos.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="paer3lxos"/>`,
		"fallback": "glyphs:hand-peace-bold",
	});
}

export default Component;
