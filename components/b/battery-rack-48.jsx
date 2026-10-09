import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2w95jbjb.css';
import '../../css/d/dfk-rnbho.css';
import '../../css/a/abct7yz6h.css';
import '../../css/p/pxnyocd1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2w95jbjb"/><path class="dfk-rnbho"/><path class="abct7yz6h"/><path class="pxnyocd1e"/>`,
		"fallback": "energy-icons:battery-rack-48",
	});
}

export default Component;
