import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvekuabrc.css';
import '../../css/z/zxnpyccbs.css';
import '../../css/e/e683c6b2q.css';
import '../../css/f/f8mswb0ag.css';
import '../../css/s/s_ge-rmln.css';
import '../../css/v/vf2glrf0q.css';
import '../../css/m/m7pbr04el.css';
import '../../css/m/mstelepqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mvekuabrc"/><path class="zxnpyccbs"/><path class="e683c6b2q"/><circle class="f8mswb0ag"/><circle class="s_ge-rmln"/><circle class="vf2glrf0q"/><circle class="m7pbr04el"/><circle class="mstelepqt"/></g>`,
		"fallback": "icon-park:hdmi-connector",
	});
}

export default Component;
