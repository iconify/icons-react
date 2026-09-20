import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asca-eb-n.css';
import '../../css/e/e3ayrtdww.css';
import '../../css/b/b6tdq0bof.css';
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
		"content": `<path class="asca-eb-n"/><path class="e3ayrtdww"/><path class="b6tdq0bof"/><path class="cexd8ehxg"/><path class="cpuyfc2bi"/><path class="foygk1awv"/><path class="lcau_6b2n"/>`,
		"fallback": "openmoji:child-dark-skin-tone",
	});
}

export default Component;
