import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o5leul9ao.css';
import '../../css/p/p4bxscbjk.css';
import '../../css/z/zuqzax3uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o5leul9ao"/><path class="p4bxscbjk"/><path class="zuqzax3uu"/></g>`,
		"fallback": "withicons:git-commit-sketch",
	});
}

export default Component;
