import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt4co4p0k.css';
import '../../css/l/ldauj8b4p.css';
import '../../css/x/xx_2p24jp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zt4co4p0k"/><path class="ldauj8b4p"/><path class="xx_2p24jp"/></g>`,
		"fallback": "streamline-color:gramophone",
	});
}

export default Component;
