import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyec7dodw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyec7dodw"/>`,
		"fallback": "healthicons:breast",
	});
}

export default Component;
