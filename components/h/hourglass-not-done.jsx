import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b831m4gil.css';
import '../../css/y/ymi7bmilz.css';
import '../../css/u/u7gs_rbma.css';
import '../../css/m/my6364gtl.css';
import '../../css/c/c2_0dtqer.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b831m4gil"/><path class="ymi7bmilz"/><path class="u7gs_rbma"/><path class="my6364gtl"/><path class="c2_0dtqer"/>`,
		"fallback": "openmoji:hourglass-not-done",
	});
}

export default Component;
