import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytwk7rbeg.css';
import '../../css/e/evok60j1h.css';
import '../../css/t/th2sp9bkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytwk7rbeg"/><path clip-rule="evenodd" class="evok60j1h"/><path class="th2sp9bkm"/></g>`,
		"fallback": "glyphs:hard-drive-outline",
	});
}

export default Component;
