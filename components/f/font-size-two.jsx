import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q5a56k1qq.css';
import '../../css/u/u8tso8bmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="q5a56k1qq"/><path class="u8tso8bmp"/></g>`,
		"fallback": "icon-park:font-size-two",
	});
}

export default Component;
