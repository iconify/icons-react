import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg5aw4bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg5aw4bep"/>`,
		"fallback": "mdi-light:arrow-down-circle",
	});
}

export default Component;
