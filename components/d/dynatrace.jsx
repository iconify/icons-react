import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md2xcdxyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md2xcdxyc"/>`,
		"fallback": "simple-icons:dynatrace",
	});
}

export default Component;
