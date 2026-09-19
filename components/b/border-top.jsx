import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdfm1we6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdfm1we6w"/>`,
		"fallback": "iconoir:border-top",
	});
}

export default Component;
