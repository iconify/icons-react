import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xs28lbcae.css';
import '../../css/a/a9qgo497e.css';
import '../../css/b/b7lc0-bdo.css';
import '../../css/l/lbzqinjha.css';
import '../../css/d/d-kk_6ndx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xs28lbcae"/><path class="a9qgo497e"/><path class="b7lc0-bdo"/><circle class="lbzqinjha"/><circle class="d-kk_6ndx"/></g>`,
		"fallback": "glyphs-poly:bezier-curve",
	});
}

export default Component;
