import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vdrkvvbjv.css';
import '../../css/d/d4t8dtbyc.css';
import '../../css/u/ujzfzujod.css';
import '../../css/u/usim2nb3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="vdrkvvbjv"/><path class="d4t8dtbyc"/><path class="ujzfzujod"/><path class="usim2nb3o"/></g>`,
		"fallback": "icon-park:bill",
	});
}

export default Component;
