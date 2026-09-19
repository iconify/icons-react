import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/szduz5tno.css';
import '../../css/u/uub3otbcq.css';
import '../../css/k/k9i0_pbrn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="szduz5tno"/><path class="uub3otbcq"/><path class="k9i0_pbrn"/></g>`,
		"fallback": "glyphs-poly:film-1",
	});
}

export default Component;
