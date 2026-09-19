import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyjaandfx.css';
import '../../css/q/qvqs3bb7l.css';
import '../../css/m/mtl7qob9c.css';
import '../../css/t/tajecub_z.css';
import '../../css/k/kottpk_wd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wyjaandfx"/><path class="qvqs3bb7l"/><path clip-rule="evenodd" class="mtl7qob9c"/><path class="tajecub_z"/><path clip-rule="evenodd" class="kottpk_wd"/></g>`,
		"fallback": "glyphs:border-outline",
	});
}

export default Component;
