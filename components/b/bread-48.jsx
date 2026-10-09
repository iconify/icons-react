import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw_wrbbbz.css';
import '../../css/f/ftl4kn5-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw_wrbbbz"/><path class="ftl4kn5-g"/>`,
		"fallback": "energy-icons:bread-48",
	});
}

export default Component;
