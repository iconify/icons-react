import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf2wg-b4f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf2wg-b4f"/>`,
		"fallback": "icons8:generic-sorting",
	});
}

export default Component;
