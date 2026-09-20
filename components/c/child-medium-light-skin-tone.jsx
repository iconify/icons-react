import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asca-eb-n.css';
import '../../css/x/xb3p641rc.css';
import '../../css/j/j_5878ewv.css';
import '../../css/c/cexd8ehxg.css';
import '../../css/c/cpuyfc2bi.css';
import '../../css/f/foygk1awv.css';
import '../../css/l/lcau_6b2n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asca-eb-n"/><path class="xb3p641rc"/><path class="j_5878ewv"/><path class="cexd8ehxg"/><path class="cpuyfc2bi"/><path class="foygk1awv"/><path class="lcau_6b2n"/>`,
		"fallback": "openmoji:child-medium-light-skin-tone",
	});
}

export default Component;
