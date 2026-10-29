import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fvt7cccuv.css';
import '../../css/a/ab7dc2b0v.css';
import '../../css/c/c2-63vb0s.css';
import '../../css/q/qnf7a4b8e.css';
import '../../css/z/z7umnhr3t.css';
import '../../css/a/acoca_bst.css';
import '../../css/g/gtl72ce_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fvt7cccuv"/><path class="ab7dc2b0v wm-k"/><path class="c2-63vb0s wm-a"/><path class="qnf7a4b8e wm-s"/><path class="wm-k z7umnhr3t"/><path class="acoca_bst wm-a"/><path class="gtl72ce_a wm-s"/></g>`,
		"fallback": "withicons:clipboard-pen-sketch",
	});
}

export default Component;
