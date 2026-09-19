import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5hhzc2pb.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5hhzc2pb"/>`,
		"fallback": "topcoat:image",
	});
}

export default Component;
