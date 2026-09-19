import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvsppfdxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvsppfdxq"/>`,
		"fallback": "bi:cup",
	});
}

export default Component;
