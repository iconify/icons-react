import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks4jvob4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ks4jvob4y"/>`,
		"fallback": "token:eti",
	});
}

export default Component;
