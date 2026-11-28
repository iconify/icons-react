import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w13d4acuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w13d4acuk"/>`,
		"fallback": "noviair-light:folder-open",
	});
}

export default Component;
