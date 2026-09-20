import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya9kw7fhk.css';
import '../../css/r/r0_ieedtm.css';
import '../../css/a/ak916kbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ya9kw7fhk"/><path clip-rule="evenodd" class="r0_ieedtm"/><path clip-rule="evenodd" class="ak916kbnl"/></g>`,
		"fallback": "nrk:game-controller",
	});
}

export default Component;
