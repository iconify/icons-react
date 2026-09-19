import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnt5nqbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnt5nqbcu"/>`,
		"fallback": "ci:add-row",
	});
}

export default Component;
