import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plwc9ubfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plwc9ubfc"/>`,
		"fallback": "icons8:circle",
	});
}

export default Component;
