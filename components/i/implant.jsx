import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytck23rpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytck23rpj"/>`,
		"fallback": "healthicons:implant",
	});
}

export default Component;
