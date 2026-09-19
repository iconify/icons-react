import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6k02uyhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6k02uyhl"/>`,
		"fallback": "iconoir:border-br",
	});
}

export default Component;
