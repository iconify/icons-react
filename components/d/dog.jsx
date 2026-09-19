import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kx87pvbnb.css';
import '../../css/v/vhpjnr_lv.css';
import '../../css/k/kpahkbbpx.css';
import '../../css/o/oh96srbus.css';
import '../../css/t/t378gbehq.css';
import '../../css/k/k946zmboj.css';
import '../../css/r/rg21mtbyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kx87pvbnb"/><path class="vhpjnr_lv"/><circle class="kpahkbbpx"/><circle class="oh96srbus"/><path class="t378gbehq"/><path class="k946zmboj"/><path class="rg21mtbyg"/></g>`,
		"fallback": "icon-park-outline:dog",
	});
}

export default Component;
