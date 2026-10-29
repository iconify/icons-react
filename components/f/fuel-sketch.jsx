import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/juj-yyb3h.css';
import '../../css/r/ryv0a7boy.css';
import '../../css/d/drhbokbsz.css';
import '../../css/n/nu6fsptef.css';
import '../../css/c/ci-xzcbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="juj-yyb3h"/><path class="ryv0a7boy wm-k"/><path class="drhbokbsz wm-a"/><path class="nu6fsptef wm-k"/><path class="ci-xzcbit wm-a"/></g>`,
		"fallback": "withicons:fuel-sketch",
	});
}

export default Component;
