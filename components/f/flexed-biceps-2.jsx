import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_tzm0gmr.css';
import '../../css/x/xk1-tobir.css';
import '../../css/u/u2a_xg-zl.css';
import '../../css/j/jgazl0bjt.css';
import '../../css/n/nzhiq--ps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_tzm0gmr"/><path class="xk1-tobir"/><path class="u2a_xg-zl"/><path class="jgazl0bjt"/><path class="nzhiq--ps"/>`,
		"fallback": "streamline-emojis:flexed-biceps-2",
	});
}

export default Component;
