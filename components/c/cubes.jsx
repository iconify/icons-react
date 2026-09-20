import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkzyu1bkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkzyu1bkg"/>`,
		"fallback": "vaadin:cubes",
	});
}

export default Component;
