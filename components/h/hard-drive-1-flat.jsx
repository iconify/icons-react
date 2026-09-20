import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgc28lbvr.css';
import '../../css/d/d2crkbcfy.css';
import '../../css/n/npi2psbkk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pgc28lbvr"/><path clip-rule="evenodd" class="d2crkbcfy"/><path clip-rule="evenodd" class="npi2psbkk"/></g>`,
		"fallback": "streamline-flex-color:hard-drive-1-flat",
	});
}

export default Component;
