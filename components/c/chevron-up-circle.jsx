import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajwjw6b4q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajwjw6b4q"/>`,
		"fallback": "memory:chevron-up-circle",
	});
}

export default Component;
