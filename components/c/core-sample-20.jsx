import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm7hjkbca.css';
import '../../css/b/bnwm9wbtd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm7hjkbca"/><path class="bnwm9wbtd"/>`,
		"fallback": "energy-icons:core-sample-20",
	});
}

export default Component;
