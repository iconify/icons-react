import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3-rnw8jw.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3-rnw8jw"/>`,
		"fallback": "wpf:carrental",
	});
}

export default Component;
