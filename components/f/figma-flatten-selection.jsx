import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qv1hjct0r.css';
import '../../css/r/r8nqnlg4f.css';
import '../../css/e/eihuxibxb.css';
import '../../css/n/nz-icuhdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qv1hjct0r"/><path class="r8nqnlg4f"/><path class="eihuxibxb"/><path class="nz-icuhdc"/></g>`,
		"fallback": "icon-park:figma-flatten-selection",
	});
}

export default Component;
