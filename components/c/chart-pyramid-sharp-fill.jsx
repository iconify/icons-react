import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7hp4gblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7hp4gblw"/>`,
		"fallback": "keyline-icons:chart-pyramid-sharp-fill",
	});
}

export default Component;
