import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mem23212o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mem23212o"/>`,
		"fallback": "simple-icons:hive",
	});
}

export default Component;
