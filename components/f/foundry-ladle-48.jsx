import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy0hggooi.css';
import '../../css/h/hi--g1d6e.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy0hggooi"/><path class="hi--g1d6e"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:foundry-ladle-48",
	});
}

export default Component;
