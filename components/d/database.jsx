import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr7rw0bnu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr7rw0bnu"/>`,
		"fallback": "memory:database",
	});
}

export default Component;
