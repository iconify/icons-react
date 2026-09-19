import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd8hznqdc.css';
import '../../css/z/zs5_5_csw.css';
import '../../css/m/mud-36bku.css';
import '../../css/b/b--zx2sbj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jd8hznqdc"/><rect class="zs5_5_csw"/><path clip-rule="evenodd" class="mud-36bku"/><path class="b--zx2sbj"/></g>`,
		"fallback": "glyphs-poly:images",
	});
}

export default Component;
