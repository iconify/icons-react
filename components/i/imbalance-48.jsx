import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycclpjbnb.css';
import '../../css/n/ndahk2b0e.css';
import '../../css/n/nh3pp-bwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycclpjbnb"/><path class="ndahk2b0e"/><path class="nh3pp-bwc"/>`,
		"fallback": "energy-icons:imbalance-48",
	});
}

export default Component;
