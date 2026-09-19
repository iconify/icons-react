import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/u/u7x-0jbkz.css';
import '../../css/d/di0ku6gag.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="u7x-0jbkz"/><path class="di0ku6gag"/></g>`,
		"fallback": "glyphs:grin-tongue-squint-duo",
	});
}

export default Component;
