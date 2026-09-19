import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kylvxgb4n.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kylvxgb4n"/>`,
		"fallback": "academicons:dblp",
	});
}

export default Component;
