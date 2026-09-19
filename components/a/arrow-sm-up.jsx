import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weo4nqbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weo4nqbun"/>`,
		"fallback": "heroicons-outline:arrow-sm-up",
	});
}

export default Component;
