import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-o3-66fq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-o3-66fq"/>`,
		"fallback": "dashicons:columns",
	});
}

export default Component;
