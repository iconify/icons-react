import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm3u3j5lh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm3u3j5lh"/>`,
		"fallback": "memory:alert-box",
	});
}

export default Component;
