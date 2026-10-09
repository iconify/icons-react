import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8mp0wbzm.css';
import '../../css/w/wkylhn4dt.css';
import '../../css/p/pvx_7s2bb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8mp0wbzm"/><path class="wkylhn4dt"/><path class="pvx_7s2bb"/>`,
		"fallback": "energy-icons:fireplace-48",
	});
}

export default Component;
