import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imaghvb2r.css';
import '../../css/w/wjk4-1mdx.css';
import '../../css/w/wyd9l79cu.css';
import '../../css/u/u3lsibblk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="imaghvb2r"/><path class="wjk4-1mdx"/><path class="wyd9l79cu"/><path class="u3lsibblk"/></g>`,
		"fallback": "glyphs:graduation-cap-bold",
	});
}

export default Component;
