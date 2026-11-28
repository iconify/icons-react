import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvxuy3bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvxuy3bsv"/>`,
		"fallback": "iconaut:git-graph-solid",
	});
}

export default Component;
