import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baai45q_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baai45q_n"/>`,
		"fallback": "carbon:direction-fork",
	});
}

export default Component;
