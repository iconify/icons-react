import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqugpjbox.css';
import '../../css/g/g8h-pj3bn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqugpjbox"/><path class="g8h-pj3bn"/>`,
		"fallback": "flat-color-icons:data-protection",
	});
}

export default Component;
