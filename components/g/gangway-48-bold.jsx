import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt1i9cb7l.css';
import '../../css/x/xf50wgb4t.css';
import '../../css/t/tb4njgoat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt1i9cb7l"/><path class="xf50wgb4t"/><path class="tb4njgoat"/>`,
		"fallback": "energy-icons:gangway-48-bold",
	});
}

export default Component;
