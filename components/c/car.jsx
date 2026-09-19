import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n6a7svn4q.css';
import '../../css/y/yze3a4bfn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n6a7svn4q"/><path class="yze3a4bfn"/></g>`,
		"fallback": "glyphs:car",
	});
}

export default Component;
