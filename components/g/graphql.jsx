import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q99j22b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q99j22b9p"/>`,
		"fallback": "bxl:graphql",
	});
}

export default Component;
