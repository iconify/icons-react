import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u--0s2bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u--0s2bvw"/>`,
		"fallback": "noviair-light:battery-info",
	});
}

export default Component;
