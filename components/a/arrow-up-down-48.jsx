import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a92d54b2y.css';
import '../../css/h/hubseccej.css';
import '../../css/v/vl5abyl6q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a92d54b2y"/><path class="hubseccej"/><path class="vl5abyl6q"/>`,
		"fallback": "energy-icons:arrow-up-down-48",
	});
}

export default Component;
