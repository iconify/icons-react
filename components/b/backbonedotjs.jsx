import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k57ycp3nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k57ycp3nx"/>`,
		"fallback": "thesvg-color:backbonedotjs",
	});
}

export default Component;
