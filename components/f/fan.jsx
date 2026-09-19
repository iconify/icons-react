import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks3zr9b-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks3zr9b-i"/>`,
		"fallback": "icon-park:fan",
	});
}

export default Component;
