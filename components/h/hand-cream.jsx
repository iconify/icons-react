import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/t/t_4ynpn7b.css';
import '../../css/z/zbo74-uxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="kb9zbkb1z"/><path class="t_4ynpn7b"/><rect class="zbo74-uxv"/></g>`,
		"fallback": "icon-park:hand-cream",
	});
}

export default Component;
