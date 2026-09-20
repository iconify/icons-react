import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh_xjen3p.css';
import '../../css/b/b5mo3i7nu.css';
import '../../css/g/g5nzdvbxf.css';
import '../../css/r/r9s5ejl7t.css';
import '../../css/d/dyl5lebsm.css';
import '../../css/r/r5rho_buq.css';
import '../../css/x/xtcfi7z3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh_xjen3p"/><path class="b5mo3i7nu"/><path class="g5nzdvbxf"/><path class="r9s5ejl7t"/><path class="dyl5lebsm"/><path class="r5rho_buq"/><path class="xtcfi7z3g"/>`,
		"fallback": "streamline-emojis:exclamation-mark",
	});
}

export default Component;
