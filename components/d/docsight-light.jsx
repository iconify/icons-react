import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvtfe-rmr.css';
import '../../css/a/a746rccmm.css';
import '../../css/h/hsflg_a-k.css';
import '../../css/e/euha5s-mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvtfe-rmr"/><path class="a746rccmm"/><path class="hsflg_a-k"/><circle class="euha5s-mc"/>`,
		"fallback": "selfhst:docsight-light",
	});
}

export default Component;
