import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svgxlcg8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svgxlcg8p"/>`,
		"fallback": "thesvg-color:alibaba",
	});
}

export default Component;
