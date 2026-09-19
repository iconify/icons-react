import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr4ffz20i.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr4ffz20i"/>`,
		"fallback": "topcoat:chat",
	});
}

export default Component;
