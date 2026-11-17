import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7u7l2b_d.css';
import '../../css/e/eoj636-ni.css';
import '../../css/m/mxms0bb9j.css';
import '../../css/p/pj_elnr1m.css';
import '../../css/r/r_hv0ib9i.css';
import '../../css/h/hic2w3gpp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="b7u7l2b_d"/><path class="eoj636-ni"/><path class="mxms0bb9j"/><circle class="pj_elnr1m"/><circle class="r_hv0ib9i"/><circle class="hic2w3gpp"/>`,
		"fallback": "thesvg-color:apiko",
	});
}

export default Component;
