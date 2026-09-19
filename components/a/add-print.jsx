import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/g/g3bzu6tbx.css';
import '../../css/w/wwarg-bxz.css';
import '../../css/f/fm1umgbyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="g3bzu6tbx"/><path class="wwarg-bxz"/><path class="fm1umgbyy"/></g>`,
		"fallback": "icon-park-outline:add-print",
	});
}

export default Component;
