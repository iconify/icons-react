import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsx0ls6vz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsx0ls6vz"/>`,
		"fallback": "icon-park:expand-left-and-right",
	});
}

export default Component;
