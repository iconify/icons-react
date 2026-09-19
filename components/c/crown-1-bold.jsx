import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wete5r8ng.css';
import '../../css/b/bvox4ywgs.css';
import '../../css/b/buj03-bwd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wete5r8ng"/><path class="bvox4ywgs"/><path class="buj03-bwd"/></g>`,
		"fallback": "glyphs:crown-1-bold",
	});
}

export default Component;
