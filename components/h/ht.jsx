import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znr2oyb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znr2oyb8g"/>`,
		"fallback": "cryptocurrency:ht",
	});
}

export default Component;
