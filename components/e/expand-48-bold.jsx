import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk_btpb8m.css';
import '../../css/s/s-anv9bde.css';
import '../../css/h/hfommxotc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk_btpb8m"/><path class="s-anv9bde"/><path class="hfommxotc"/>`,
		"fallback": "energy-icons:expand-48-bold",
	});
}

export default Component;
