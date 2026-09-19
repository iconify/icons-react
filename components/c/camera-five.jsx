import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l_5w5bxzf.css';
import '../../css/d/djgmrab9u.css';
import '../../css/w/whl-mbhit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="l_5w5bxzf"/><circle class="djgmrab9u"/><path class="whl-mbhit"/></g>`,
		"fallback": "icon-park-outline:camera-five",
	});
}

export default Component;
