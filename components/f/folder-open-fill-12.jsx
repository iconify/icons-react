import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mblcg4bnf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mblcg4bnf"/>`,
		"fallback": "garden:folder-open-fill-12",
	});
}

export default Component;
