import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmip0xqzg.css';
import '../../css/a/a0a0-81xw.css';
import '../../css/r/rd4h3sb2m.css';
import '../../css/v/vteh5wbit.css';
import '../../css/m/m5z9cvb4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xmip0xqzg"/><path clip-rule="evenodd" class="a0a0-81xw"/><path clip-rule="evenodd" class="rd4h3sb2m"/><path class="vteh5wbit"/><path class="m5z9cvb4h"/></g>`,
		"fallback": "icon-park:equal-ratio",
	});
}

export default Component;
