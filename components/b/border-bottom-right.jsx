import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsd7ipufe.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsd7ipufe"/>`,
		"fallback": "memory:border-bottom-right",
	});
}

export default Component;
